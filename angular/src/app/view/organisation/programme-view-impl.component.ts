// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { ProgrammeViewComponent } from '@app/view/organisation/programme-view.component';
import { ProgrammeViewVarsForm } from '@app/view/organisation/programme-view.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "@shared/loader/loader.component";
import { OrganisationEditorImplComponent } from '@app/components/organisation/organisation-editor-impl.component';
import { OrganisationDetailsImplComponent } from '@app/components/organisation/organisation-details-impl.component';

@Component({
  selector: 'app-programme-view',
  templateUrl: './programme-view.component.html',
  styleUrls: ['./programme-view.component.scss'],
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
    OrganisationEditorImplComponent,
    OrganisationDetailsImplComponent,
  ],
})
export class ProgrammeViewImplComponent extends ProgrammeViewComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: ProgrammeViewVarsForm): ProgrammeViewVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}