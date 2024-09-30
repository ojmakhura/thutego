// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { EditCurriculumOutcomeLevelComponent } from '@app/view/curriculum/outcome/edit-curriculum-outcome-level.component';
import { EditCurriculumOutcomeLevelVarsForm } from '@app/view/curriculum/outcome/edit-curriculum-outcome-level.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { ExitLevelOutcomeEditorImplComponent } from '@app/components/curriculum/outcome/exit-level-outcome-editor-impl.component';
import { ExitLevelOutcomeDetailsImplComponent } from '@app/components/curriculum/outcome/exit-level-outcome-details-impl.component';

@Component({
  selector: 'app-edit-curriculum-outcome-level',
  templateUrl: './edit-curriculum-outcome-level.component.html',
  styleUrls: ['./edit-curriculum-outcome-level.component.scss'],
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
    ExitLevelOutcomeEditorImplComponent,
    ExitLevelOutcomeDetailsImplComponent,
  ],
})
export class EditCurriculumOutcomeLevelImplComponent extends EditCurriculumOutcomeLevelComponent {

    constructor() {
        super();
        this.success = this.exitLevelOutcomeApiStore.success;
        this.loading = this.exitLevelOutcomeApiStore.loading;
        this.error = this.exitLevelOutcomeApiStore.error;
        this.messages = this.exitLevelOutcomeApiStore.messages;
    }

    override beforeOnInit(form: EditCurriculumOutcomeLevelVarsForm): EditCurriculumOutcomeLevelVarsForm{
        return form;
    }

    doNgOnDestroy(): void {
    }
}