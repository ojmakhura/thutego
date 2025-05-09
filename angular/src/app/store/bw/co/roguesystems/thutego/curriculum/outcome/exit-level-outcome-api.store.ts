
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { ExitLevelOutcomeVO } from '@app/model/bw/co/roguesystems/thutego/curriculum/outcome/exit-level-outcome-vo';
import { ExitLevelOutcomeApi } from '@app/service/bw/co/roguesystems/thutego/curriculum/outcome/exit-level-outcome-api';

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

export const ExitLevelOutcomeApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const exitLevelOutcomeApi = inject(ExitLevelOutcomeApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Finding exit level outcome...' });
          return exitLevelOutcomeApi.findById(data.id, ).pipe(
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
          patchState(store, { loading: true, loaderMessage: 'Getting all exit level outcomes...' });
          return exitLevelOutcomeApi.getAll().pipe(
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
          patchState(store, { loading: true, loaderMessage: 'Removing exit level outcome...' });
          return exitLevelOutcomeApi.remove(data.id, ).pipe(
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
      save: rxMethod<{exitLevelOutcome: ExitLevelOutcomeVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Saving exit level outcome...' });
          return exitLevelOutcomeApi.save(data.exitLevelOutcome, ).pipe(
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
          patchState(store, { loading: true, loaderMessage: 'Searching exit level outcomes...' });
          return exitLevelOutcomeApi.search(data.criteria, ).pipe(
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
