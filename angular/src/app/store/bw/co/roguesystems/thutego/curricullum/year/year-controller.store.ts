
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
import { YearVO } from '@app/model/bw/co/roguesystems/thutego/curricullum/year/year-vo';
import { YearController } from '@app/service/bw/co/roguesystems/thutego/curricullum/year/year-controller';

const initialState: AppState<any, any> = {
  data: null,
  dataList: [],
  dataPage: new Page<any>(),
  searchCriteria: new SearchObject<any>(),
  error: null,
  loading: false,
  success: false,
};

export const YearControllerStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const yearController = inject(YearController);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return yearController.findById(data.id, ).pipe(
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
          return yearController.getAll().pipe(
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
          return yearController.remove(data.id, ).pipe(
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
      save: rxMethod<{curriculumLevel: YearVO | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return yearController.save(data.curriculumLevel, ).pipe(
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
      search: rxMethod<{criteria: string | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return yearController.search(data.criteria, ).pipe(
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
