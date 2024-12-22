// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { LearningOutcomeViewComponent } from '@app/view/module/outcome/learning-outcome-view.component';
import { LearningOutcomeViewVarsForm } from '@app/view/module/outcome/learning-outcome-view.component';
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
  selector: 'app-learning-outcome-view',
  templateUrl: './learning-outcome-view.component.html',
  styleUrls: ['./learning-outcome-view.component.scss'],
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
export class LearningOutcomeViewImplComponent extends LearningOutcomeViewComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: LearningOutcomeViewVarsForm): LearningOutcomeViewVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}