
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { ModuleListVO } from '@app/model/bw/co/roguesystems/thutego/module/module-list-vo';
import { ModuleVO } from '@app/model/bw/co/roguesystems/thutego/module/module-vo';
import { ModuleApi } from '@app/service/bw/co/roguesystems/thutego/module/module-api';
import { ModuleSearchCriteria } from '@app/model/bw/co/roguesystems/thutego/module/module-search-criteria';

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

export const ModuleApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const moduleApi = inject(ModuleApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return moduleApi.findById(data.id, ).pipe(
            tapResponse({
              next: (data: ModuleVO | any) => {
                //patchState(
                  //store,
                  // {
                  //    data,
                  //    loading: false,
                  //    error: false,
                  //    success: true,
                  //    messages: []
                  //}
                //);
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
      findCurriculumModules: rxMethod<{curriculumId: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return moduleApi.findCurriculumModules(data.curriculumId, ).pipe(
            tapResponse({
              next: (data: ModuleListVO | any) => {
                //patchState(
                  //store,
                  // {
                  //    data,
                  //    loading: false,
                  //    error: false,
                  //    success: true,
                  //    messages: []
                  //}
                //);
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
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return moduleApi.getAll().pipe(
            tapResponse({
              next: (data: ModuleListVO[] | any[]) => {
                //patchState(
                  //store,
                  // {
                  //    data,
                  //    loading: false,
                  //    error: false,
                  //    success: true,
                  //    messages: []
                  //}
                //);
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
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return moduleApi.remove(data.id, ).pipe(
            tapResponse({
              next: (data: boolean | any) => {
                //patchState(
                  //store,
                  // {
                  //    data,
                  //    loading: false,
                  //    error: false,
                  //    success: true,
                  //    messages: []
                  //}
                //);
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
      save: rxMethod<{module: ModuleVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return moduleApi.save(data.module, ).pipe(
            tapResponse({
              next: (data: ModuleVO | any) => {
                //patchState(
                  //store,
                  // {
                  //    data,
                  //    loading: false,
                  //    error: false,
                  //    success: true,
                  //    messages: []
                  //}
                //);
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
      search: rxMethod<{criteria: SearchObject<ModuleSearchCriteria> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return moduleApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (data: ModuleListVO[] | any[]) => {
                //patchState(
                  //store,
                  // {
                  //    data,
                  //    loading: false,
                  //    error: false,
                  //    success: true,
                  //    messages: []
                  //}
                //);
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
