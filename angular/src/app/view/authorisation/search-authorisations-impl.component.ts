// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component, effect, inject } from '@angular/core';
import { SearchAuthorisationsComponent } from '@app/view/authorisation/search-authorisations.component';
import { SearchAuthorisationsVarsForm } from '@app/view/authorisation/search-authorisations.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';

import { TableComponent } from '@app/components/table/table.component';
import { AuthorisationSearchImplComponent } from '@app/components/authorisation/authorisation-search-impl.component';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { SelectItem } from '@app/utils/select-item';
import { AppEnvStore } from '@app/store/app-env.state';
import { MatPaginator } from '@angular/material/paginator';
import { AuthorisationCriteria } from '@app/model/bw/co/roguesystems/thutego/authorisation/authorisation-criteria';
import { SearchObject } from '@app/model/search-object';
import { LoaderComponent } from '@app/@shared';

@Component({
  selector: 'app-search-authorisations',
  templateUrl: './search-authorisations.component.html',
  styleUrls: ['./search-authorisations.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule,

    TableComponent,
    AuthorisationSearchImplComponent,
    LoaderComponent
  ],
})
export class SearchAuthorisationsImplComponent extends SearchAuthorisationsComponent {
  protected keycloakService: KeycloakService = inject(KeycloakService);
  http = inject(HttpClient);
  readonly appStore = inject(AppEnvStore);
  realmRoles  = this.appStore.realmRoles;

  constructor() {
    super();
    this.authorisationApiStore.reset();
    this.success = this.authorisationApiStore.success;
    this.loading = this.authorisationApiStore.loading;
    this.error = this.authorisationApiStore.error;
    this.messages = this.authorisationApiStore.messages;
    this.loaderMessage = this.authorisationApiStore.loaderMessage;
    this.authorisationsTablePaged = true;
    this.authorisationsTableSignal = this.authorisationApiStore.dataPage;

  }

  override beforeOnInit(form: SearchAuthorisationsVarsForm): SearchAuthorisationsVarsForm {

    return form;
  }

  doNgOnDestroy(): void {}

  override doNgAfterViewInit(): void {

    this.authorisationsTable?.tablePaginator?.page?.subscribe({
      next: (paginator: MatPaginator) => {
        this.doSearch(paginator.pageIndex, paginator.pageSize);
      },
    });
  }

  override beforeSearchAuthorisationsSearch(form: any): void {

    form.criteria = this.criteria.formGroupControl.value;

    this.doSearch();
  }

  private doSearch(pageNumber: number = 0, pageSize: number = 10): void {
    let criteria = new SearchObject<AuthorisationCriteria>();
    criteria.criteria = this.criteria.formGroupControl.value;
    criteria.pageNumber = pageNumber;
    criteria.pageSize = pageSize;

    this.authorisationApiStore.searchPaged({ criteria: criteria });
  }

  override afterOnInit(): void {
  }

}
