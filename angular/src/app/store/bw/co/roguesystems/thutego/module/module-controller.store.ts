
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Page } from '@app/model/page.model';
import { SearchObject } from '@app/model/search-object';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { ModuleListVO } from '@app/model/bw/co/roguesystems/thutego/module/module-list-vo';
import { ModuleVO } from '@app/model/bw/co/roguesystems/thutego/module/module-vo';
import { ModuleController } from '@app/service/bw/co/roguesystems/thutego/module/module-controller';

const initialState: AppState<any, any> = {
  data: null,
  dataList: [],
  dataPage: new Page<any>(),
  searchCriteria: new SearchObject<any>(),
  error: null,
  loading: false,
  success: false,
};

export const ModuleControllerStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const moduleController = inject(ModuleController);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return moduleController.findById(data.id, ).pipe(
            tapResponse({
              next: (data) => {
                // patchState(store, { data, loading: false, success: true });
              },
              error: (error) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      findModuleTopics: rxMethod<{moduleId: number | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return moduleController.findModuleTopics(data.moduleId, ).pipe(
            tapResponse({
              next: (data) => {
                // patchState(store, { data, loading: false, success: true });
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
          return moduleController.getAll().pipe(
            tapResponse({
              next: (data) => {
                // patchState(store, { data, loading: false, success: true });
              },
              error: (error) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      remove: rxMethod<{id: number | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return moduleController.remove(data.id, ).pipe(
            tapResponse({
              next: (data) => {
                // patchState(store, { data, loading: false, success: true });
              },
              error: (error) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      save: rxMethod<{module: ModuleVO | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return moduleController.save(data.module, ).pipe(
            tapResponse({
              next: (data) => {
                // patchState(store, { data, loading: false, success: true });
              },
              error: (error) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
      search: rxMethod<{criteria: SearchObject<ModuleSearchCriteria> | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return moduleController.search(data.criteria, ).pipe(
            tapResponse({
              next: (data) => {
                // patchState(store, { data, loading: false, success: true });
              },
              error: (error) => {
                patchState(store, { error, loading: false, success: false });
              },
            }),
          );
        }),
      ),
    }
  }),
);
