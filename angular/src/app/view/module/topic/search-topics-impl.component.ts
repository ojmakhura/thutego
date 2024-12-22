// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { SearchTopicsComponent } from '@app/view/module/topic/search-topics.component';
import { SearchTopicsVarsForm } from '@app/view/module/topic/search-topics.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "@shared/loader/loader.component";
import { TopicEditorImplComponent } from '@app/components/module/topic/topic-editor-impl.component';

@Component({
  selector: 'app-search-topics',
  templateUrl: './search-topics.component.html',
  styleUrls: ['./search-topics.component.scss'],
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
    TopicEditorImplComponent,
  ],
})
export class SearchTopicsImplComponent extends SearchTopicsComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: SearchTopicsVarsForm): SearchTopicsVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}