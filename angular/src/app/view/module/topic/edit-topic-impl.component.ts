// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { EditTopicComponent } from '@app/view/module/topic/edit-topic.component';
import { EditTopicVarsForm } from '@app/view/module/topic/edit-topic.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { TopicDetailsImplComponent } from '@app/components/module/topic/topic-details-impl.component';
import { TopicEditorImplComponent } from '@app/components/module/topic/topic-editor-impl.component';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss'],
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
    TopicDetailsImplComponent,
    TopicEditorImplComponent,
  ],
})
export class EditTopicImplComponent extends EditTopicComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: EditTopicVarsForm): EditTopicVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}