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
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSelectChange } from '@angular/material/select';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatChip, MatChipInput, MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, of, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { CurriculumLevelVO } from '@app/model/bw/co/roguesystems/thutego/curriculum/level/curriculum-level-vo';
import { CurriculumStatus } from '@app/model/bw/co/roguesystems/thutego/curriculum/curriculum-status';
import { SearchObject } from '@app/model/search-object';
import { CurriculumEditorComponent } from './curriculum-editor.component';
import { CurriculumLevelApiStore } from '@app/store/bw/co/roguesystems/thutego/curriculum/level/curriculum-level-api.store';
import { CurriculumApiStore } from '@app/store/bw/co/roguesystems/thutego/curriculum/curriculum-api.store';

@Component({
  selector: 'app-curriculum-editor',
  templateUrl: './curriculum-editor.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, SharedModule, MaterialModule, CsvModule],
})
export class CurriculumEditorImplComponent extends CurriculumEditorComponent {

  curriculumStore = inject(CurriculumApiStore);
  curriculumLevelStore = inject(CurriculumLevelApiStore);
  searchingLevels = false;
  loadingCurriculum = false;

  constructor() {
    super();

    effect(() => {

      this.levelBackingList = this.curriculumLevelStore.dataList();
      let curriculum = this.curriculumStore.data();

      if(this.searchingLevels) {

        this.levelFilteredList$ = of(this.levelBackingList);
        this.searchingLevels = false;
      }

      if(this.loadingCurriculum) {

        this.curriculumEditorForm.patchValue(curriculum);
        this.loadingCurriculum = false;
      }

    });

    if(this.id) {
      this.loadingCurriculum = true;
      this.curriculumStore.findById({id: this.id});
    }
  }

  override levelCompare(o1: any, o2: any) {
    return o1 && o2 && o1.id === o2.id;
  }

  override filterLevel() {

    this.searchingLevels = true;

    let search = this.levelFilterCtrl.value;

    if(!search) {
      search = '';
    } else {

      search = search.toLowerCase();
    }

    this.curriculumLevelStore.search({criteria: search});

  }
}
