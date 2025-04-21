import { AuthorisationApi } from './service/bw/co/roguesystems/thutego/authorisation/authorisation-api';
import { Menu } from './model/menu/menu';
import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '@env/environment';
import { MaterialModule } from './material.module';
import { ShellComponent } from './shell/shell.component';
import { I18nService } from './i18n/i18n.service';
import { Logger } from './@shared';
import { HttpClient } from '@angular/common/http';
import { AppEnvStore } from './store/app-env.state';
import { KeycloakService } from 'keycloak-angular';
import { patchState } from '@ngrx/signals';
import { SelectItem } from './utils/select-item';
import * as nav from './shell/navigation';
import { AuthorisationApiStore } from './store/bw/co/roguesystems/thutego/authorisation/authorisation-api.store';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule, MaterialModule, ShellComponent],
})
export class AppComponent implements OnInit, OnDestroy {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private translateService = inject(TranslateService);
  private i18nService = inject(I18nService);
  readonly appStore = inject(AppEnvStore);
  protected keycloakService = inject(KeycloakService);
  private authorisationStore = inject(AuthorisationApiStore);
  private authorisationApi = inject(AuthorisationApi);
  http = inject(HttpClient);
  env = this.appStore.env;

  loadingEnv = false;

  constructor() {
    effect(() => {
      console.log('env', this.env);
      if (!this.env) {
        return;
      }

      let e = this.env();
      if (e) {
        console.log('env', e);

        if (e && this.loadingEnv) {
          this.loadRealmRoles(e);
          this.loadingEnv = false;
        }
      }
    });
  }

  ngOnInit() {
    this.loadingEnv = true;
    this.appStore.getEnv();

    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
      )
      .subscribe((event: any) => {
        const title = event['title'];
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }

  loadRealmRoles(env: any) {
    console.log('loadRealmRoles', env);
    let realmUrl = `${env.authDomain}/admin/realms/${environment.keycloak.realm}`;

    this.keycloakService.loadUserProfile().then((profile) => {
      if (!profile) return;
      this.appStore.setIsLoggedIn(this.keycloakService.isLoggedIn());
      if(this.keycloakService.isLoggedIn()) {

        this.appStore.setAccountUri(`${env.authDomain}/realms/${environment.keycloak.realm}/account?referrer=' + ${encodeURIComponent(environment.keycloak.clientId)}&referrer_uri=' + ${encodeURIComponent(environment.keycloak.redirectUri)}`);
        this.appStore.setUsername(this.keycloakService.getUsername());
      }

      this.http.get<any[]>(`${realmUrl}/clients`).subscribe((clients) => {
        let client = clients.filter((client) => client.clientId === environment.keycloak.clientId)[0];
        this.http
          .get<any[]>(`${realmUrl}/users/${profile.id}/role-mappings/clients/${client.id}/composite`)
          .subscribe((roles) => {
            roles
              .sort((a, b) => a.name.localeCompare(b.name))
              .forEach((role) => {
                if (this.keycloakService.getUserRoles().includes(role.name)) {
                  let item = new SelectItem();
                  item.label = role['description'];
                  item.value = role['name'];

                  this.appStore.addRealmRole(item);
                }
              });
          });
      });

      this.http.get<any[]>(`${realmUrl}/users/${profile.id}/role-mappings/realm/composite`).subscribe((roles) => {
        roles
          .sort((a, b) => a.name.localeCompare(b.name))
          .forEach((role: any) => {
            if (this.keycloakService.getUserRoles().includes(role.name) && !role.description?.includes('${')) {
              let item = new SelectItem();
              item.label = role['description'];
              item.value = role['name'];

              this.appStore.addRealmRole(item);
            }
          });
      });
    });
  }
}
