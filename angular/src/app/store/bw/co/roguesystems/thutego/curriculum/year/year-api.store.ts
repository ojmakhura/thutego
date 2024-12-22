
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { YearVO } from '@app/model/bw/co/roguesystems/thutego/curriculum/year/year-vo';
import { YearApi } from '@app/service/bw/co/roguesystems/thutego/curriculum/year/year-api';

const initialState: AppState<any, any> = {
  data: null,
  dataList: [],
  dataPage: new Page<any>(),
  searchCriteria: new SearchObject<any>(),
  error: null,
  loading: false,
  success: false,
  messages: [],
  loaderMessage: ''
};

export const YearApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const yearApi = inject(YearApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Finding year...' });
          return yearApi.findById(data.id, ).pipe(
            tapResponse({
              next: (data: any) => {
                // patchState(store, { data, loading: false, success: true });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      getAll: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true, loaderMessage: 'Getting all years...' });
          return yearApi.getAll().pipe(
            tapResponse({
              next: (data: any) => {
                // patchState(store, { data, loading: false, success: true });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      remove: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Removing year...' });
          return yearApi.remove(data.id, ).pipe(
            tapResponse({
              next: (data: any) => {
                // patchState(store, { data, loading: false, success: true });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      save: rxMethod<{curriculumLevel: YearVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Saving year...' });
          return yearApi.save(data.curriculumLevel, ).pipe(
            tapResponse({
              next: (data: any) => {
                // patchState(store, { data, loading: false, success: true });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      search: rxMethod<{criteria: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Searching year...' });
          return yearApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (data: any) => {
                // patchState(store, { data, loading: false, success: true });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
    }
  }),
);
