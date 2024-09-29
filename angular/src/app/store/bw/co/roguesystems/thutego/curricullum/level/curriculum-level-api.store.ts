import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { CurriculumLevelVO } from '@app/model/bw/co/roguesystems/thutego/curricullum/level/curriculum-level-vo';
import { CurriculumLevelApi } from '@app/service/bw/co/roguesystems/thutego/curricullum/level/curriculum-level-api';

const initialState: AppState<any, any> = {
  data: null,
  dataList: [],
  dataPage: new Page<any>(),
  searchCriteria: new SearchObject<any>(),
  error: null,
  loading: false,
  success: false,
  messages: [],
};

export const CurriculumLevelApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const curriculumLevelApi = inject(CurriculumLevelApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{ id: number | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return curriculumLevelApi.findById(data.id).pipe(
            tapResponse({
              next: (data) => {
                patchState(store, { data, loading: false, success: true });
              },
              error: (error) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      getAll: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true });
          return curriculumLevelApi.getAll().pipe(
            tapResponse({
              next: (dataList) => {
                patchState(store, { dataList, loading: false, success: true });
              },
              error: (error) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      remove: rxMethod<{ id: number | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return curriculumLevelApi.remove(data.id).pipe(
            tapResponse({
              next: (data) => {
                patchState(store, { loading: false, success: true });
              },
              error: (error) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      save: rxMethod<{ curriculumLevel: CurriculumLevelVO | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return curriculumLevelApi.save(data.curriculumLevel).pipe(
            tapResponse({
              next: (data) => {
                patchState(store, { data, loading: false, success: true });
              },
              error: (error) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      search: rxMethod<{ criteria: string | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return curriculumLevelApi.search(data.criteria).pipe(
            tapResponse({
              next: (dataList) => {
                patchState(store, { dataList, loading: false, success: true });
              },
              error: (error) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
    };
  }),
);
