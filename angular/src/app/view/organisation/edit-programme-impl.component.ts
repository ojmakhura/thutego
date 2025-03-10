// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { EditProgrammeComponent } from '@app/view/organisation/edit-programme.component';
import { EditProgrammeVarsForm } from '@app/view/organisation/edit-programme.component';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { TableComponent } from '@app/components/table/table.component';
import { LoaderComponent } from "@shared/loader/loader.component";
import { OrganisationEditorImplComponent } from '@app/components/organisation/organisation-editor-impl.component';
import { OrganisationDetailsImplComponent } from '@app/components/organisation/organisation-details-impl.component';

@Component({
  selector: 'app-edit-programme',
  templateUrl: './edit-programme.component.html',
  styleUrls: ['./edit-programme.component.scss'],
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
    OrganisationEditorImplComponent,
    OrganisationDetailsImplComponent,
  ],
})
export class EditProgrammeImplComponent extends EditProgrammeComponent {

    constructor() {
        super();
        this.programmeApiStore.reset();
        this.success = this.programmeApiStore.success;
        this.loading = this.programmeApiStore.loading;
        this.error = this.programmeApiStore.error;
        this.messages = this.programmeApiStore.messages;
        this.loaderMessage = this.programmeApiStore.loaderMessage;
    }

    override beforeOnInit(form: EditProgrammeVarsForm): EditProgrammeVarsForm{
        return form;
    }

    doNgOnDestroy(): void {
    }
}
