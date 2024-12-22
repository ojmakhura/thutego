
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { LearningFieldVO } from '@app/model/bw/co/roguesystems/thutego/curriculum/field/learning-field-vo';
import { LearningFieldApi } from '@app/service/bw/co/roguesystems/thutego/curriculum/field/learning-field-api';

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

export const LearningFieldApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const learningFieldApi = inject(LearningFieldApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return learningFieldApi.findById(data.id, ).pipe(
            tapResponse({
              next: (data: any) => {
                patchState(
                  store, {
                   data,
                   loading: false,
                   success: true,
                   messages: [`Found learning field with id ${data.field}`]
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    error,
                    loading: false,
                    success: false,
                    messages: [error?.error ? error.error : error]
                  }
                );
              },
            }),
          );
        }),
      ),
      getAll: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true });
          return learningFieldApi.getAll().pipe(
            tapResponse({
              next: (dataList: any) => {
                patchState(
                  store, {
                    dataList,
                   loading: false,
                   success: true,
                   messages: [`Found ${dataList.length} learning fields`]
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    error,
                    loading: false,
                    success: false,
                    messages: [error?.error ? error.error : error]
                  }
                );
              },
            }),
          );
        }),
      ),
      remove: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return learningFieldApi.remove(data.id, ).pipe(
            tapResponse({
              next: (data: any) => {
                patchState(
                  store, {
                   loading: false,
                   success: true,
                   messages: ['Leaning field removed successfully']
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    error,
                    loading: false,
                    success: false,
                    messages: [error?.error ? error.error : error]
                  }
                );
              },
            }),
          );
        }),
      ),
      save: rxMethod<{field: LearningFieldVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return learningFieldApi.save(data.field, ).pipe(
            tapResponse({
              next: (data: any) => {
                patchState(
                  store, {
                   data,
                   loading: false,
                   success: true,
                   messages: [
                      `Learning field ${data.field} saved successfully`
                   ]
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    error,
                    loading: false,
                    success: false,
                    messages: [error?.error ? error.error : error]
                  }
                );
              },
            }),
          );
        }),
      ),
      search: rxMethod<{criteria: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return learningFieldApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (dataList: any) => {
                patchState(
                  store, {
                    dataList,
                   loading: false,
                   success: true,
                   messages: [
                      `Found ${dataList.length} learning fields`
                   ]
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    error,
                    loading: false,
                    success: false,
                    messages: [error?.error ? error.error : error]
                  }
                );
              },
            }),
          );
        }),
      ),
    }
  }),
);
