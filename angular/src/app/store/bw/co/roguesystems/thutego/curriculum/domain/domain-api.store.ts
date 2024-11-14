
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { DomainVO } from '@app/model/bw/co/roguesystems/thutego/curriculum/domain/domain-vo';
import { DomainApi } from '@app/service/bw/co/roguesystems/thutego/curriculum/domain/domain-api';

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

export const DomainApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const domainApi = inject(DomainApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return domainApi.findById(data.id, ).pipe(
            tapResponse({
              next: (data: any) => {
                patchState(
                  store, {
                   data,
                   loading: false,
                   success: true,
                   messages: [
                      `Found domain with id ${data.name}`
                   ]
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
          patchState(store, { loading: true });
          return domainApi.getAll().pipe(
            tapResponse({
              next: (dataList: any) => {
                patchState(
                  store, {
                    dataList,
                   loading: false,
                   success: true,
                   messages: [
                      `Found ${dataList.length} domains`
                   ]
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
          patchState(store, { loading: true });
          return domainApi.remove(data.id, ).pipe(
            tapResponse({
              next: (data: any) => {
                patchState(
                  store, {
                   loading: false,
                   success: true,
                   messages: [
                      `Deleted domain with id ${data.id}`
                   ]
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
      save: rxMethod<{domain: DomainVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return domainApi.save(data.domain, ).pipe(
            tapResponse({
              next: (data: any) => {
                patchState(
                  store, {
                   data,
                   loading: false,
                   success: true,
                   messages: [
                      `Saved domain ${data.name}`
                   ]
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
          patchState(store, { loading: true });
          return domainApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (dataList: any) => {
                patchState(
                  store, {
                    dataList,
                   loading: false,
                   success: true,
                   messages: [
                      `Found ${dataList.length} domains`
                   ]
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
