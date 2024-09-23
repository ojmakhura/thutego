// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { EditInstitutionComponent } from '@app/view/institution/edit-institution.component';
import { EditInstitutionVarsForm } from '@app/view/institution/edit-institution.component';
import { InstitutionState } from '@app/store/institution/institution.state';
import * as InstitutionSelectors from '@app/store/institution/institution.selectors';
import * as InstitutionActions from '@app/store/institution/institution.actions';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { InstitutionDetailsComponent } from '@app/components/institution/institution-details.component';
import { InstitutionEditorComponent } from '@app/components/institution/institution-editor.component';

@Component({
  selector: 'app-edit-institution',
  templateUrl: './edit-institution.component.html',
  styleUrls: ['./edit-institution.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    MaterialModule,
    CsvModule,
    InstitutionDetailsComponent,
    InstitutionEditorComponent,
  ],
})
export class EditInstitutionImplComponent extends EditInstitutionComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: EditInstitutionVarsForm): EditInstitutionVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}