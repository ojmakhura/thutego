
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { OrganisationVO } from '@app/model/bw/co/roguesystems/thutego/organisation/organisation-vo';
import { OrganisationApi } from '@app/service/bw/co/roguesystems/thutego/organisation/organisation-api';

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

export const OrganisationApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const organisationApi = inject(OrganisationApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return organisationApi.findById(data.id, ).pipe(
            tapResponse({
              next: (data: OrganisationVO | any) => {
                patchState(
                  store,
                  {
                     data,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Organisation with id ${data.name} found`]
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
          return organisationApi.getAll().pipe(
            tapResponse({
              next: (dataList: OrganisationVO[] | any[]) => {
                patchState(
                  store,
                  {
                    dataList,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Found ${dataList.length} organisations.`]
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
          return organisationApi.remove(data.id, ).pipe(
            tapResponse({
              next: (data: boolean | any) => {
                patchState(
                  store,
                  {
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Organisation with removed`]
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
      save: rxMethod<{organisation: OrganisationVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return organisationApi.save(data.organisation, ).pipe(
            tapResponse({
              next: (data: OrganisationVO | any) => {
                patchState(
                  store,
                  {
                     data,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Organisation with id ${data.name} saved`]
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
          return organisationApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (dataList: OrganisationVO[] | any[]) => {
                patchState(
                  store,
                  {
                    dataList,
                     loading: false,
                     error: false,
                     success: true,
                     messages: [`Found ${dataList.length} organisations.`]
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
