
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { TopicVO } from '@app/model/bw/co/roguesystems/thutego/module/topic/topic-vo';
import { TopicApi } from '@app/service/bw/co/roguesystems/thutego/module/topic/topic-api';

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

export const TopicApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const topicApi = inject(TopicApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return topicApi.findById(data.id, ).pipe(
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
      findModuleOutcomeTopics: rxMethod<{learningOutcomeId: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return topicApi.findModuleOutcomeTopics(data.learningOutcomeId, ).pipe(
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
          return topicApi.findModuleTopics(data.moduleId, ).pipe(
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
          return topicApi.getAll().pipe(
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
          return topicApi.remove(data.id, ).pipe(
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
      save: rxMethod<{topic: TopicVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return topicApi.save(data.topic, ).pipe(
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
          patchState(store, { loading: true });
          return topicApi.search(data.criteria, ).pipe(
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
