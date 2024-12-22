// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { EditLearningOutcomeComponent } from '@app/view/module/outcome/edit-learning-outcome.component';
import { EditLearningOutcomeVarsForm } from '@app/view/module/outcome/edit-learning-outcome.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "@shared/loader/loader.component";
import { LeaningOutcomeDetailsImplComponent } from '@app/components/module/outcome/learning-outcome-details-impl.component';
import { LearningOutcomeEditorImplComponent } from '@app/components/module/outcome/learning-outcome-editor-impl.component';

@Component({
  selector: 'app-edit-learning-outcome',
  templateUrl: './edit-learning-outcome.component.html',
  styleUrls: ['./edit-learning-outcome.component.scss'],
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
    LeaningOutcomeDetailsImplComponent,
    LearningOutcomeEditorImplComponent,
  ],
})
export class EditLearningOutcomeImplComponent extends EditLearningOutcomeComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: EditLearningOutcomeVarsForm): EditLearningOutcomeVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}