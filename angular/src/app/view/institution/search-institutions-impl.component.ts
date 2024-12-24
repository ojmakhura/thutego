// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { SearchInstitutionsComponent } from '@app/view/institution/search-institutions.component';
import { SearchInstitutionsVarsForm } from '@app/view/institution/search-institutions.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "@shared/loader/loader.component";
import { InstitutionEditorImplComponent } from '@app/components/institution/institution-editor-impl.component';

@Component({
  selector: 'app-search-institutions',
  templateUrl: './search-institutions.component.html',
  styleUrls: ['./search-institutions.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule,
    CsvModule,
    TableComponent,
    LoaderComponent,
    InstitutionEditorImplComponent,
  ],
})
export class SearchInstitutionsImplComponent extends SearchInstitutionsComponent {

    constructor() {
        super();
        this.institutionApiStore.reset();
        this.success = this.institutionApiStore.success;
        this.loading = this.institutionApiStore.loading;
        this.error = this.institutionApiStore.error;
        this.messages = this.institutionApiStore.messages;
        this.loaderMessage = this.institutionApiStore.loaderMessage;
        this.institutionsTablePaged = true;
        this.institutionsTableSignal = this.institutionApiStore.dataPage;
    }

    override beforeOnInit(form: SearchInstitutionsVarsForm): SearchInstitutionsVarsForm{
        return form;
    }

    doNgOnDestroy(): void {
    }
}
