import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { CurriculumLevelVO } from '@app/model/bw/co/roguesystems/thutego/curriculum/level/curriculum-level-vo';
import { CurriculumLevelApi } from '@app/service/bw/co/roguesystems/thutego/curriculum/level/curriculum-level-api';

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
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Finding curriculum level...' });
          return curriculumLevelApi.findById(data.id).pipe(
            tapResponse({
              next: (data: any) => {
                patchState(store, { data, loading: false, success: true, messages: [`Found curriculum level with id ${data.code}`] });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false, messages: [error?.error ? error.error : error] });
              },
            }),
          );
        }),
      ),
      getAll: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true, loaderMessage: 'Getting all curriculum levels...' });
          return curriculumLevelApi.getAll().pipe(
            tapResponse({
              next: (dataList: any) => {
                patchState(
                  store,
                  {
                    dataList,
                    loading: false,
                    success: true, messages: [
                      `Found ${dataList.length} curriculum levels`
                    ]
                  }
                );
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false, messages: [error?.error ? error.error : error] });
              },
            }),
          );
        }),
      ),
      remove: rxMethod<{ id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Removing curriculum level...' });
          return curriculumLevelApi.remove(data.id).pipe(
            tapResponse({
              next: (removed: boolean) => {
                patchState(
                  store,
                  {
                    loading: false,
                    success: true,
                    messages: [
                      `Removed curriculum level with code ${data.id}`
                    ]
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store,
                  {
                    error,
                    loading: false,
                    success: false,
                    messages: [
                      error?.error ? error.error : error
                    ]
                  }
                );
              },
            }),
          );
        }),
      ),
      save: rxMethod<{ curriculumLevel: CurriculumLevelVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Saving curriculum level...' });
          return curriculumLevelApi.save(data.curriculumLevel).pipe(
            tapResponse({
              next: (data: any) => {
                patchState(
                  store,
                  {
                    data,
                    loading: false,
                    success: true,
                    messages: [
                      `Saved curriculum level with code ${data.level}`
                    ]
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store,
                  {
                    error,
                    loading: false,
                    success: false,
                    messages: [
                      error?.error ? error.error : error
                    ]
                  }
                );
              },
            }),
          );
        }),
      ),
      search: rxMethod<{ criteria: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Searching curriculum levels...' });
          return curriculumLevelApi.search(data.criteria).pipe(
            tapResponse({
              next: (dataList: any) => {
                patchState(store,
                  {
                    dataList,
                    loading: false,
                    success: true,
                    messages: [
                      `Found ${dataList.length} curriculum levels`
                    ]
                  }
                );
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false, messages: [error?.error ? error.error : error] });
              },
            }),
          );
        }),
      ),
    };
  }),
);
