// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { SearchModulesComponent } from '@app/view/module/search-modules.component';
import { SearchModulesVarsForm } from '@app/view/module/search-modules.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { ModuleEditorImplComponent } from '@app/components/module/module-editor-impl.component';
import { ModuleSearchImplComponent } from '@app/components/module/module-search-impl.component';

@Component({
  selector: 'app-search-modules',
  templateUrl: './search-modules.component.html',
  styleUrls: ['./search-modules.component.scss'],
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
    ModuleEditorImplComponent,
    ModuleSearchImplComponent,
  ],
})
export class SearchModulesImplComponent extends SearchModulesComponent {

    constructor() {
        super();
    }

    override beforeOnInit(form: SearchModulesVarsForm): SearchModulesVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}