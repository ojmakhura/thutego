// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { SearchDomainsComponent } from '@app/view/curriculum/domain/search-domains.component';
import { SearchDomainsVarsForm } from '@app/view/curriculum/domain/search-domains.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { DomainEditorImplComponent } from '@app/components/curriculum/domain/domain-editor-impl.component';

@Component({
  selector: 'app-search-domains',
  templateUrl: './search-domains.component.html',
  styleUrls: ['./search-domains.component.scss'],
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
    DomainEditorImplComponent,
  ],
})
export class SearchDomainsImplComponent extends SearchDomainsComponent {

    constructor() {
        super();
        this.domainApiStore.reset()
        this.success = this.domainApiStore.success;
        this.loading = this.domainApiStore.loading;
        this.error = this.domainApiStore.error;
        this.messages = this.domainApiStore.messages;
    }

    override beforeOnInit(form: SearchDomainsVarsForm): SearchDomainsVarsForm{
        return form;
    }

    doNgOnDestroy(): void {
    }
}
