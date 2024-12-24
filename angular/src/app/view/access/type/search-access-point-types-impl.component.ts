// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { SearchAccessPointTypesComponent } from '@app/view/access/type/search-access-point-types.component';
import { SearchAccessPointTypesVarsForm } from '@app/view/access/type/search-access-point-types.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "@shared/loader/loader.component";

@Component({
  selector: 'app-search-access-point-types',
  templateUrl: './search-access-point-types.component.html',
  styleUrls: ['./search-access-point-types.component.scss'],
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
  ],
})
export class SearchAccessPointTypesImplComponent extends SearchAccessPointTypesComponent {

    constructor() {
        super();
        this.accessPointTypeApiStore.reset()
        this.success = this.accessPointTypeApiStore.success;
        this.loading = this.accessPointTypeApiStore.loading;
        this.error = this.accessPointTypeApiStore.error;
        this.messages = this.accessPointTypeApiStore.messages;
        this.accessPointTypesTablePaged = false;
        this.accessPointTypesTableSignal = this.accessPointTypeApiStore.dataList;
    }

    override beforeOnInit(form: SearchAccessPointTypesVarsForm): SearchAccessPointTypesVarsForm{
        return form;
    }

    doNgOnDestroy(): void {
    }

    override beforeSearchAccessPointTypesSearch(form: any): void {

      console.log(this.searchAccessPointTypesForm.value);
      this.accessPointTypeApiStore.search(this.searchAccessPointTypesForm.value);
    }
}
