
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { LearningOutcomeVO } from '@app/model/bw/co/roguesystems/thutego/module/outcome/learning-outcome-vo';
import { LearningOutcomeApi } from '@app/service/bw/co/roguesystems/thutego/module/outcome/learning-outcome-api';

const initialState: AppState<any, any> = {
  data: null,
  dataList: [],
  dataPage: new Page<any>(),
  searchCriteria: new SearchObject<any>(),
  error: null,
  loading: false,
  success: false,
  messages: []
};

export const LearningOutcomeApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const learningOutcomeApi = inject(LearningOutcomeApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return learningOutcomeApi.findById(data.id, ).pipe(
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
      findModuleOutcomes: rxMethod<{moduleId: number | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return learningOutcomeApi.findModuleOutcomes(data.moduleId, ).pipe(
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
          return learningOutcomeApi.getAll().pipe(
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
          return learningOutcomeApi.remove(data.id, ).pipe(
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
      save: rxMethod<{learningOutcome: LearningOutcomeVO | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return learningOutcomeApi.save(data.learningOutcome, ).pipe(
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
          return learningOutcomeApi.search(data.criteria, ).pipe(
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
