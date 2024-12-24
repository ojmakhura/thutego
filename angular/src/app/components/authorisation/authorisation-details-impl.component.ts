// Generated by andromda-angular cartridge (view\components\component.ts.vsl) DO NOT EDIT
import { AfterViewInit, Component, effect, inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { SelectItem } from '@app/utils/select-item';
import { MatSelectChange } from '@angular/material/select';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatChip, MatChipInput, MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom, Observable, map, of, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { AccessPointListDTO } from '@app/model/bw/co/bitri/cfpso/access/access-point-list-dto';
import { SearchObject } from '@app/model/search-object';
import { AuthorisationDetailsComponent } from './authorisation-details.component';
import { TableComponent } from '@app/components/table/table.component';
import { AppEnvStore } from '@app/store/app-env.state';

@Component({
  selector: 'app-authorisation-details',
  templateUrl: './authorisation-details.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, MaterialModule, CsvModule, TableComponent],
})
export class AuthorisationDetailsImplComponent extends AuthorisationDetailsComponent {
  readonly appStore = inject(AppEnvStore);
  realmRoles = this.appStore.realmRoles;

  constructor() {
    super();

    effect(() => {
      if (!this.realmRoles) {
        return;
      }

      if (this.realmRoles) {
        let roles = this.realmRoles();

        if (roles) {
          this.rolesFilteredList$ = of(roles);
        }
      }
    });
  }
}
