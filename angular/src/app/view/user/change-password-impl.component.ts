// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component, Inject } from '@angular/core';
import { ChangePasswordComponent } from '@app/view/user/change-password.component';
import { ChangePasswordVarsForm } from '@app/view/user/change-password.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "@shared/loader/loader.component";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
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
export class ChangePasswordImplComponent extends ChangePasswordComponent {

    constructor(@Inject(MAT_DIALOG_DATA) data: any) {
        super(data);
    }

    override beforeOnInit(form: ChangePasswordVarsForm): ChangePasswordVarsForm{     
        return form;
    }

    doNgOnDestroy(): void {
    }
}