import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, effect, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';
import * as nav from './navigation';
import { LanguageSelectorComponent } from '@app/i18n/language-selector.component';
import { KeycloakService } from 'keycloak-angular';
import { AppEnvStore } from '@app/store/app-env.state';
import { Observable, of } from 'rxjs';
import { environment } from '@env/environment';
import { AuthorisationApi } from '@app/service/bw/co/roguesystems/thutego/authorisation/authorisation-api';
import { AuthorisationApiStore } from '@app/store/bw/co/roguesystems/thutego/authorisation/authorisation-api.store';
import { Menu } from '@app/model/menu/menu';
import { AuthorisationListDTO } from '@app/model/bw/co/roguesystems/thutego/authorisation/authorisation-list-dto';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, MaterialModule, RouterModule, LanguageSelectorComponent],
})
export class ShellComponent implements OnInit {
  readonly appStore = inject(AppEnvStore);
  private titleService = inject(Title);
  private keycloakService = inject(KeycloakService);
  private breakpoint = inject(BreakpointObserver);
  private authorisationApi = inject(AuthorisationApi);
  private authorisationStore = inject(AuthorisationApiStore);
  env = this.appStore.env;

  isLoggedIn: Observable<boolean> = of(false);
  menus: any[] = [];

  constructor() {
    effect(() => {
      let e: any;
      if (this.env) {
        e = this.env();
        if (!e) {
          return;
        }

        this.setLoggedIn();
      }
    });
  }

  ngOnInit() {
    this.menus = nav.menuItems;
  }

  setLoggedIn() {

    let loggedIn = this.keycloakService.isLoggedIn();
    console.log('loggedIn', loggedIn);

    if (loggedIn && this.appStore.realmRoles().length > 0) {

      let menus = new Array<string>();
      menus.push('MENU');

      this.authorisationApi
        .getAccessTypeCodeAuthorisations(
          this.appStore.realmRoles().map((role) => role.value),
          menus,
        )
        .subscribe((authorisations) => {
          console.log('authorisations', authorisations);
          authorisations.forEach((authorisation: AuthorisationListDTO) => {
            let menu: Menu = nav.menuItems.find((item) => authorisation.accessPointUrl === item.routerLink);

            if (menu) {
              this.appStore.addMenu(menu);
            }
          });
        });
    }
  }

  logout() {
    let e = this.env ? this.env() : null;
    this.keycloakService.logout(e?.redirectUri).then(() => {});
  }

  get isMobile(): boolean {
    return this.breakpoint.isMatched(Breakpoints.Small) || this.breakpoint.isMatched(Breakpoints.XSmall);
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
