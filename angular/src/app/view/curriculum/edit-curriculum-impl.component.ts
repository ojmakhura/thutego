// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { EditCurriculumComponent } from '@app/view/curriculum/edit-curriculum.component';
import { EditCurriculumVarsForm } from '@app/view/curriculum/edit-curriculum.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { CurriculumDetailsComponent } from '@app/components/curriculum/curriculum-details.component';
import { CurriculumEditorComponent } from '@app/components/curriculum/curriculum-editor.component';

@Component({
  selector: 'app-edit-curriculum',
  templateUrl: './edit-curriculum.component.html',
  styleUrls: ['./edit-curriculum.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    MaterialModule,
    CsvModule,
    TableComponent,
    CurriculumDetailsComponent,
    CurriculumEditorComponent,
  ],
})
export class EditCurriculumImplComponent extends EditCurriculumComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: EditCurriculumVarsForm): EditCurriculumVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}