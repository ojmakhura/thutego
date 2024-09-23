// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { InstitutionViewComponent } from '@app/view/institution/institution-view.component';
import { InstitutionViewVarsForm } from '@app/view/institution/institution-view.component';
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
  selector: 'app-institution-view',
  templateUrl: './institution-view.component.html',
  styleUrls: ['./institution-view.component.scss'],
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
export class InstitutionViewImplComponent extends InstitutionViewComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: InstitutionViewVarsForm): InstitutionViewVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}