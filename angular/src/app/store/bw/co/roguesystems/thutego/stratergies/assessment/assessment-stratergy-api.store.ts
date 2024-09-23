
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
import { AssessmentStrategyVO } from '@app/model/bw/co/roguesystems/thutego/stratergies/assessment/assessment-strategy-vo';
import { AssessmentStratergyApi } from '@app/service/bw/co/roguesystems/thutego/stratergies/assessment/assessment-stratergy-api';

const initialState: AppState<any, any> = {
  data: null,
  dataList: [],
  dataPage: new Page<any>(),
  searchCriteria: new SearchObject<any>(),
  error: null,
  loading: false,
  success: false,
};

export const AssessmentStratergyApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const assessmentStratergyApi = inject(AssessmentStratergyApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return assessmentStratergyApi.findById(data.id, ).pipe(
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
          return assessmentStratergyApi.getAll().pipe(
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
          return assessmentStratergyApi.remove(data.id, ).pipe(
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
      save: rxMethod<{trainingStratergy: AssessmentStrategyVO | any }>(
        switchMap((data) => {
          patchState(store, { loading: true });
          return assessmentStratergyApi.save(data.trainingStratergy, ).pipe(
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
          return assessmentStratergyApi.search(data.criteria, ).pipe(
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
