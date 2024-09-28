// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { EditCurriculumLevelComponent } from '@app/view/curriculum/level/edit-curriculum-level.component';
import { EditCurriculumLevelVarsForm } from '@app/view/curriculum/level/edit-curriculum-level.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { CurriculumLevelEditorComponent } from '@app/components/curriculum/level/curriculum-level-editor.component';
import { CurriculumLevelDetailsComponent } from '@app/components/curriculum/level/curriculum-level-details.component';

@Component({
  selector: 'app-edit-curriculum-level',
  templateUrl: './edit-curriculum-level.component.html',
  styleUrls: ['./edit-curriculum-level.component.scss'],
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
    CurriculumLevelEditorComponent,
    CurriculumLevelDetailsComponent,
  ],
})
export class EditCurriculumLevelImplComponent extends EditCurriculumLevelComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: EditCurriculumLevelVarsForm): EditCurriculumLevelVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}