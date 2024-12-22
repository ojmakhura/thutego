// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { TopicViewComponent } from '@app/view/module/topic/topic-view.component';
import { TopicViewVarsForm } from '@app/view/module/topic/topic-view.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "@shared/loader/loader.component";
import { TopicDetailsImplComponent } from '@app/components/module/topic/topic-details-impl.component';
import { TopicEditorImplComponent } from '@app/components/module/topic/topic-editor-impl.component';

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.scss'],
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
    TopicDetailsImplComponent,
    TopicEditorImplComponent,
  ],
})
export class TopicViewImplComponent extends TopicViewComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: TopicViewVarsForm): TopicViewVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}