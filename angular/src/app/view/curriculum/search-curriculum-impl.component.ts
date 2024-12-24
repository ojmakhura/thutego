// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { SearchCurriculumComponent } from '@app/view/curriculum/search-curriculum.component';
import { SearchCurriculumVarsForm } from '@app/view/curriculum/search-curriculum.component';
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
import { CurriculumSearchImplComponent } from '@app/components/curriculum/curriculum-search-impl.component';

@Component({
  selector: 'app-search-curriculum',
  templateUrl: './search-curriculum.component.html',
  styleUrls: ['./search-curriculum.component.scss'],
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
    CurriculumSearchImplComponent,
  ],
})
export class SearchCurriculumImplComponent extends SearchCurriculumComponent {

    constructor() {
        super();
        this.curriculumApiStore.reset();
        this.success = this.curriculumApiStore.success;
        this.loading = this.curriculumApiStore.loading;
        this.error = this.curriculumApiStore.error;
        this.messages = this.curriculumApiStore.messages;
        this.curriculaTablePaged = true;
        this.curriculaTableSignal = this.curriculumApiStore.dataPage;
    }

    override beforeOnInit(form: SearchCurriculumVarsForm): SearchCurriculumVarsForm{
        return form;
    }

    doNgOnDestroy(): void {
    }
}
