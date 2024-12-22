import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { CurriculumVO } from '@app/model/bw/co/roguesystems/thutego/curriculum/curriculum-vo';
import { CurriculumListVO } from '@app/model/bw/co/roguesystems/thutego/curriculum/curriculum-list-vo';
import { CurriculumApi } from '@app/service/bw/co/roguesystems/thutego/curriculum/curriculum-api';
import { CurriculumSearchCriteria } from '@app/model/bw/co/roguesystems/thutego/curriculum/curriculum-search-criteria';

const initialState: AppState<CurriculumVO | any, CurriculumListVO> = {
  data: null,
  dataList: [],
  dataPage: new Page<CurriculumListVO>(),
  searchCriteria: new SearchObject<any>(),
  error: null,
  loading: false,
  success: false,
  messages: [],
  loaderMessage: ''
};

export const CurriculumApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const curriculumApi = inject(CurriculumApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{ id: number | any }>(
        switchMap((data: { id: number | any }) => {
          patchState(store, { loading: true, loaderMessage: 'Finding curriculum...' });
          return curriculumApi.findById(data.id).pipe(
            tapResponse({
              next: (data: CurriculumVO) => {
                patchState(
                  store,
                  {
                    data,
                    loading: false,
                    success: true,
                    messages: [`Found curriculum with id ${data.id}`]
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
          patchState(store, { loading: true, loaderMessage: 'Getting all curricula...' });
          return curriculumApi.getAll().pipe(
            tapResponse({
              next: (dataList: any[]) => {
                patchState(
                  store,
                  {
                    dataList,
                    loading: false,
                    success: true ,
                    messages: [`Found ${dataList.length} curriculums`]
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
                    messages: [error?.error ? error.error : error]
                  }
                );
              },
            }),
          );
        }),
      ),
      getAllPaged: rxMethod<{pageNumber: number , pageSize: number}>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Getting all curricula by page...' });
          return curriculumApi.getAllPaged(data.pageNumber, data.pageSize).pipe(
            tapResponse({
              next: (dataPage: any) => {
                patchState(
                  store,
                  {
                    dataPage,
                    loading: false,
                    success: true,
                    messages: [`Found ${dataPage.totalElements} curricula`]
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
                    messages: [error?.error ? error.error : error]
                  }
                );
              },
            }),
          );
        }),
      ),
      remove: rxMethod<{ id: number | any }>(
        switchMap((data: { id: number | any }) => {
          patchState(store, { loading: true, loaderMessage: 'Removing curriculum...' });
          return curriculumApi.remove(data.id).pipe(
            tapResponse({
              next: (removed: boolean) => {
                patchState(
                  store,
                  {
                    loading: false,
                    success: true ,
                    messages: [`Removed curriculum with id ${data.id}`]
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
                    messages: [error?.error ? error.error : error]
                  }
                );
              },
            }),
          );
        }),
      ),
      save: rxMethod<{ curriculum: CurriculumVO | any }>(
        switchMap((data: { curriculum: CurriculumVO | any }) => {
          patchState(store, { loading: true, loaderMessage: 'Saving curriculum...' });
          return curriculumApi.save(data.curriculum).pipe(
            tapResponse({
              next: (data: CurriculumVO | any ) => {
                patchState(
                  store,
                  {
                    data,
                    loading: false,
                    success: true,
                    messages: [`Saved curriculum with id ${data.name}`]
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
                    messages: [error?.error ? error.error : error]
                  }
                );
              },
            }),
          );
        }),
      ),
      search: rxMethod<{ criteria: SearchObject<CurriculumSearchCriteria> | any }>(
        switchMap((data: { criteria: SearchObject<CurriculumSearchCriteria> | any }) => {
          patchState(store, { loading: true, loaderMessage: 'Searching curricula...' });
          return curriculumApi.search(data.criteria).pipe(
            tapResponse({
              next: (dataList: CurriculumVO[]) => {
                patchState(
                  store,
                  {
                    dataList,
                    loading: false,
                    success: true,
                    messages: [`Found ${dataList.length} curricula`]
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
                    messages: [error?.error ? error.error : error]
                  }
                );
              },
            }),
          );
        }),
      ),
      searchPaged: rxMethod<{ criteria: SearchObject<CurriculumSearchCriteria> | any }>(
        switchMap((data: { criteria: SearchObject<CurriculumSearchCriteria> | any }) => {
          patchState(store, { loading: true, loaderMessage: 'Searching curricula by page...' });
          return curriculumApi.searchPaged(data.criteria).pipe(
            tapResponse({
              next: (dataPage: any) => {
                patchState(
                  store,
                  {
                    dataPage,
                    loading: false,
                    success: true,
                    messages: [`Found ${dataPage.totalElements} curricula`]
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
                    messages: [error?.error ? error.error : error]
                  }
                );
              },
            }),
          );
        }),
      ),
    };
  }),
);
