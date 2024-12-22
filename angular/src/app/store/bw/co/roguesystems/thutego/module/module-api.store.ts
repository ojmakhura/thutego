
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
  withMethods((store) => {
    const moduleApi = inject(ModuleApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return moduleApi.findById(data.id, ).pipe(
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
      findModuleTopics: rxMethod<{moduleId: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return moduleApi.findModuleTopics(data.moduleId, ).pipe(
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
          patchState(store, { loading: true });
          return moduleApi.getAll().pipe(
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
          patchState(store, { loading: true });
          return moduleApi.remove(data.id, ).pipe(
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
      save: rxMethod<{module: ModuleVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return moduleApi.save(data.module, ).pipe(
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
      search: rxMethod<{criteria: SearchObject<ModuleSearchCriteria> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return moduleApi.search(data.criteria, ).pipe(
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
