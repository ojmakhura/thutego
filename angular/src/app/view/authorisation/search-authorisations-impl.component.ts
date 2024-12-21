// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { SearchAuthorisationsComponent } from '@app/view/authorisation/search-authorisations.component';
import { SearchAuthorisationsVarsForm } from '@app/view/authorisation/search-authorisations.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "../../@shared/loader/loader.component";
import { AuthorisationSearchImplComponent } from '@app/components/authorisation/authorisation-search-impl.component';

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
    CsvModule,
    TableComponent,
    LoaderComponent,
    AuthorisationSearchImplComponent,
  ],
})
export class SearchAuthorisationsImplComponent extends SearchAuthorisationsComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: SearchAuthorisationsVarsForm): SearchAuthorisationsVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}