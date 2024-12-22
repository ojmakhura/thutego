
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { AccessPointDTO } from '@app/model/bw/co/roguesystems/thutego/access/access-point-dto';
import { AccessPointCriteria } from '@app/model/bw/co/roguesystems/thutego/access/access-point-criteria';
import { AccessPointListDTO } from '@app/model/bw/co/roguesystems/thutego/access/access-point-list-dto';
import { AccessPointApi } from '@app/service/bw/co/roguesystems/thutego/access/access-point-api';

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

export const AccessPointApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const accessPointApi = inject(AccessPointApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{ id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading Access Point...' });
          return accessPointApi.findById(data.id).pipe(
            tapResponse({
              next: (data: AccessPointDTO | any) => {
                patchState(store, {
                  data,
                  loading: false,
                  error: false,
                  success: true,
                  messages: ['Access Point loaded successfully'],
                });
              },
              error: (error: any) => {
                patchState(store, {
                  error,
                  loading: false,
                  success: false,
                  messages: [error?.error ? error.error : error],
                });
              },
            }),
          );
        }),
      ),
      getAll: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true, loaderMessage: 'Loading all Access Points...' });
          return accessPointApi.getAll().pipe(
            tapResponse({
              next: (dataList: AccessPointListDTO[] | any[]) => {
                patchState(store, {
                  dataList,
                  loading: false,
                  error: false,
                  success: true,
                  messages: [],
                });
              },
              error: (error: any) => {
                patchState(store, {
                  error,
                  loading: false,
                  success: false,
                  messages: [error?.error ? error.error : error],
                });
              },
            }),
          );
        }),
      ),
      getAllPaged: rxMethod<{ pageNumber: number | any; pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading a page of Access Points...' });
          return accessPointApi.getAllPaged(data.pageNumber, data.pageSize).pipe(
            tapResponse({
              next: (dataPage: Page<AccessPointListDTO>[] | any) => {
                patchState(store, {
                  dataPage,
                  loading: false,
                  error: false,
                  success: true,
                  messages: [`Page ${dataPage.pageNumber} of Access Points loaded successfully`],
                });
              },
              error: (error: any) => {
                patchState(store, {
                  error,
                  loading: false,
                  success: false,
                  messages: [error?.error ? error.error : error],
                });
              },
            }),
          );
        }),
      ),
      pagedSearch: rxMethod<{ criteria: SearchObject<AccessPointCriteria> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Searching for Access Points...' });
          return accessPointApi.pagedSearch(data.criteria).pipe(
            tapResponse({
              next: (dataPage: Page<AccessPointListDTO> | any) => {
                patchState(store, {
                  dataPage,
                  loading: false,
                  error: false,
                  success: true,
                  messages: [`Page ${dataPage.pageNumber} of Access Points loaded successfully`],
                });
              },
              error: (error: any) => {
                patchState(store, {
                  error,
                  loading: false,
                  success: false,
                  messages: [error?.error ? error.error : error],
                });
              },
            }),
          );
        }),
      ),
      remove: rxMethod<{ id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Removing Access Point...' });
          return accessPointApi.remove(data.id).pipe(
            tapResponse({
              next: (data: boolean | any) => {
                patchState(store, {
                  loading: false,
                  error: false,
                  success: true,
                  messages: [],
                });
              },
              error: (error: any) => {
                patchState(store, {
                  error,
                  loading: false,
                  success: false,
                  messages: [error?.error ? error.error : error],
                });
              },
            }),
          );
        }),
      ),
      save: rxMethod<{ accessPoint: AccessPointDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Saving Access Point...' });
          return accessPointApi.save(data.accessPoint).pipe(
            tapResponse({
              next: (data: AccessPointDTO | any) => {
                patchState(store, {
                  data,
                  loading: false,
                  error: false,
                  success: true,
                  messages: [`Access Point ${data.name} saved successfully`],
                });
              },
              error: (error: any) => {
                patchState(store, {
                  error,
                  loading: false,
                  success: false,
                  messages: [error?.error ? error.error : error],
                });
              },
            }),
          );
        }),
      ),
      search: rxMethod<{ criteria: AccessPointCriteria | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Searching for Access Points...' });
          return accessPointApi.search(data.criteria).pipe(
            tapResponse({
              next: (dataList: AccessPointListDTO[] | any[]) => {
                patchState(store, {
                  dataList,
                  loading: false,
                  error: false,
                  success: true,
                  messages: [`Access Points loaded successfully`],
                });
              },
              error: (error: any) => {
                patchState(store, {
                  error,
                  loading: false,
                  success: false,
                  messages: [error?.error ? error.error : error],
                });
              },
            }),
          );
        }),
      ),
    };
  }),
);

