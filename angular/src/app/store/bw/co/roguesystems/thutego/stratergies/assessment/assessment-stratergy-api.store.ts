
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
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
  messages: [],
  loaderMessage: ''
};

export const AssessmentStratergyApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const assessmentStratergyApi = inject(AssessmentStratergyApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return assessmentStratergyApi.findById(data.id, ).pipe(
            tapResponse({
              next: (data: AssessmentStrategyVO | any) => {
                patchState(
                  store,
                  {
                     data,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Assessment Strategy with id ${data.id} found`]
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
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return assessmentStratergyApi.getAll().pipe(
            tapResponse({
              next: (dataList: AssessmentStrategyVO[] | any[]) => {
                patchState(
                  store,
                  {
                     dataList,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Found ${dataList.length} Assessment Strategies`]
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
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return assessmentStratergyApi.remove(data.id, ).pipe(
            tapResponse({
              next: (data: boolean | any) => {
                patchState(
                  store,
                  {
                     data,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Assessment Strategy with id ${data.id} removed`]
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
      save: rxMethod<{assessmentStratergy: AssessmentStrategyVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return assessmentStratergyApi.save(data.assessmentStratergy, ).pipe(
            tapResponse({
              next: (data: AssessmentStrategyVO | any) => {
                patchState(
                  store,
                  {
                     data,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Assessment Strategy saved`]
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
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return assessmentStratergyApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (dataList: AssessmentStrategyVO[] | any[]) => {
                patchState(
                  store,
                  {
                    dataList,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Found ${dataList.length} Assessment Strategies`]
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
