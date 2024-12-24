
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { TrainingStrategyVO } from '@app/model/bw/co/roguesystems/thutego/stratergies/training/training-strategy-vo';
import { TrainingStratergyApi } from '@app/service/bw/co/roguesystems/thutego/stratergies/training/training-stratergy-api';

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

export const TrainingStratergyApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const trainingStratergyApi = inject(TrainingStratergyApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return trainingStratergyApi.findById(data.id, ).pipe(
            tapResponse({
              next: (data: TrainingStrategyVO | any) => {
                patchState(
                  store,
                  {
                     data,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Training Strategy with id ${data.id} found`]
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
          return trainingStratergyApi.getAll().pipe(
            tapResponse({
              next: (data: TrainingStrategyVO[] | any[]) => {
                patchState(
                  store,
                  {
                     data,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Found ${data.length} Training Strategies`]
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
          return trainingStratergyApi.remove(data.id, ).pipe(
            tapResponse({
              next: (dataList: boolean | any) => {
                patchState(
                  store,
                  {
                    dataList,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Training Strategy with id ${dataList.id} removed`]
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
      save: rxMethod<{trainingStratergy: TrainingStrategyVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return trainingStratergyApi.save(data.trainingStratergy, ).pipe(
            tapResponse({
              next: (data: TrainingStrategyVO | any) => {
                patchState(
                  store,
                  {
                     data,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Training Strategy with saved`]
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
          return trainingStratergyApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (dataList: TrainingStrategyVO[] | any[]) => {
                patchState(
                  store,
                  {
                    dataList,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Found ${dataList.length} Training Strategies`]
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
