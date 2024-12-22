// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { CurriculumViewComponent } from '@app/view/curriculum/curriculum-view.component';
import { CurriculumViewVarsForm } from '@app/view/curriculum/curriculum-view.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "@shared/loader/loader.component";
import { CurriculumEditorImplComponent } from '@app/components/curriculum/curriculum-editor-impl.component';
import { CurriculumDetailsImplComponent } from '@app/components/curriculum/curriculum-details-impl.component';

@Component({
  selector: 'app-curriculum-view',
  templateUrl: './curriculum-view.component.html',
  styleUrls: ['./curriculum-view.component.scss'],
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
    CurriculumEditorImplComponent,
    CurriculumDetailsImplComponent,
  ],
})
export class CurriculumViewImplComponent extends CurriculumViewComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: CurriculumViewVarsForm): CurriculumViewVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}