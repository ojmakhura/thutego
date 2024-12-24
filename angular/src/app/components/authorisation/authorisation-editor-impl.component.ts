// Generated by andromda-angular cartridge (view\components\component.ts.vsl) DO NOT EDIT
import {
  AfterViewInit,
  Component,
  effect,
  inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from "@angular/forms";
import { SelectItem } from "@app/utils/select-item";
import { MatSelectChange } from '@angular/material/select';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatChip, MatChipInput, MatChipInputEvent } from "@angular/material/chips";
import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom, Observable, map, of, startWith } from "rxjs";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { AccessPointListDTO } from '@app/model/bw/co/roguesystems/thutego/access/access-point-list-dto';
import { SearchObject } from '@app/model/search-object';
import { AuthorisationEditorComponent } from './authorisation-editor.component';
import { TableComponent } from '@app/components/table/table.component';
import { AppEnvStore } from "@app/store/app-env.state";
import { AuthorisationApiStore } from "@app/store/bw/co/roguesystems/thutego/authorisation/authorisation-api.store";
import { AccessPointApiStore } from "@app/store/bw/co/roguesystems/thutego/access/access-point-api.store";

@Component({
  selector: "app-authorisation-editor",
  templateUrl: "./authorisation-editor.component.html",
  styleUrls: [],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule,
    CsvModule,
    TableComponent,
  ]
})
export class AuthorisationEditorImplComponent extends AuthorisationEditorComponent {
  readonly appStore = inject(AppEnvStore);
  readonly authorisationApiStore = inject(AuthorisationApiStore);
  readonly accessPointApiStore = inject(AccessPointApiStore);
  realmRoles = this.appStore.realmRoles;
  loadingRoles = false;
  loadingAccessPoints = false;

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

      const authorisation = this.authorisationApiStore.data();

      if (authorisation) {
        this.accessPointFilteredList$ = of([authorisation.accessPoint]);
        this.rolesFilteredList$ = of(authorisation.roles.map((role: string) => {
          return {label: role, value: role};
        }));
        setTimeout(() => {
          this.formGroupControl.patchValue(authorisation);
        });
      }

      this.accessPointBackingList = this.accessPointApiStore.dataList();
      if (this.loadingAccessPoints) {
        this.loadingAccessPoints = false;
        this.accessPointFilteredList$ = of(this.accessPointBackingList);
      }
    });
  }

  override filterRoles() {
    this.loadingRoles = true;
    console.log('filterRoles', this.rolesFilterCtrl.value);
    // this.property.search({ criteria: this.rolesFilterCtrl.value });
  }

  override rolesCompare(o1: any | any, o2: any | any) {

    return o1 && o2 ? o1 === o2 : false;
  }

  override filterAccessPoint(): void {
    this.loadingAccessPoints = true;
    this.accessPointApiStore.search({ criteria: this.accessPointFilterCtrl.value });
  }

  override accessPointCompare(o1: AccessPointListDTO | any, o2: AccessPointListDTO | any) {
    return o1 && o2 ? o1.id === o2.id : false;
  }

}