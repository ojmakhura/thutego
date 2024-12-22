// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { EditAuthorisationComponent } from '@app/view/authorisation/edit-authorisation.component';
import { EditAuthorisationVarsForm } from '@app/view/authorisation/edit-authorisation.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "@shared/loader/loader.component";
import { AuthorisationEditorImplComponent } from '@app/components/authorisation/authorisation-editor-impl.component';

@Component({
  selector: 'app-edit-authorisation',
  templateUrl: './edit-authorisation.component.html',
  styleUrls: ['./edit-authorisation.component.scss'],
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
    AuthorisationEditorImplComponent,
  ],
})
export class EditAuthorisationImplComponent extends EditAuthorisationComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: EditAuthorisationVarsForm): EditAuthorisationVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}