// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { SearchProgrammesComponent } from '@app/view/programme/search-programmes.component';
import { SearchProgrammesVarsForm } from '@app/view/programme/search-programmes.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "../../@shared/loader/loader.component";
import { ProgrammeEditorImplComponent } from '@app/components/programme/programme-editor-impl.component';

@Component({
  selector: 'app-search-programmes',
  templateUrl: './search-programmes.component.html',
  styleUrls: ['./search-programmes.component.scss'],
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
    ProgrammeEditorImplComponent,
  ],
})
export class SearchProgrammesImplComponent extends SearchProgrammesComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: SearchProgrammesVarsForm): SearchProgrammesVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}