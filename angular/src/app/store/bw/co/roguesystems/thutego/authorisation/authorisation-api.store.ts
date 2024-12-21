
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { AuthorisationCriteria } from '@app/model/bw/co/roguesystems/thutego/authorisation/authorisation-criteria';
import { AuthorisationDTO } from '@app/model/bw/co/roguesystems/thutego/authorisation/authorisation-dto';
import { AuthorisationListDTO } from '@app/model/bw/co/roguesystems/thutego/authorisation/authorisation-list-dto';
import { AuthorisationApi } from '@app/service/bw/co/roguesystems/thutego/authorisation/authorisation-api';

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

export const AuthorisationApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const authorisationApi = inject(AuthorisationApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return authorisationApi.findById(data.id, ).pipe(
            tapResponse({
              next: (data: AuthorisationDTO | any) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
      findByRolesAndUrl: rxMethod<{url: string | any , roles: Array<string> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return authorisationApi.findByRolesAndUrl(data.url, data.roles, ).pipe(
            tapResponse({
              next: (data: AuthorisationListDTO[] | any[]) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
      findByRolesAndUrlPaged: rxMethod<{url: string | any , roles: Array<string> | any , pageNumber: number | any , pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return authorisationApi.findByRolesAndUrlPaged(data.url, data.roles, data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (data: Page<AuthorisationListDTO>[] | any[]) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
      findRestrictedViewItems: rxMethod<{url: string | any , roles: Array<string> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return authorisationApi.findRestrictedViewItems(data.url, data.roles, ).pipe(
            tapResponse({
              next: (data: AuthorisationListDTO[] | any[]) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
      getAccessTypeCodeAuthorisations: rxMethod<{roles: Array<string> | any , accessPointTypeCodes: Array<string> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return authorisationApi.getAccessTypeCodeAuthorisations(data.roles, data.accessPointTypeCodes, ).pipe(
            tapResponse({
              next: (data: AuthorisationListDTO[] | any[]) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
      getAccessTypeCodeAuthorisationsPaged: rxMethod<{roles: Array<string> | any , accessPointTypeCodes: Array<string> | any , pageNumber: number | any , pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return authorisationApi.getAccessTypeCodeAuthorisationsPaged(data.roles, data.accessPointTypeCodes, data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (data: Page<AuthorisationListDTO>[] | any[]) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
          return authorisationApi.getAll().pipe(
            tapResponse({
              next: (data: AuthorisationListDTO[] | any[]) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
      getAllPaged: rxMethod<{pageNumber: number | any , pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return authorisationApi.getAllPaged(data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (data: Page<AuthorisationListDTO> | any) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
          return authorisationApi.remove(data.id, ).pipe(
            tapResponse({
              next: (data: boolean | any) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
      save: rxMethod<{authorisation: AuthorisationDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return authorisationApi.save(data.authorisation, ).pipe(
            tapResponse({
              next: (data: AuthorisationDTO | any) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
      search: rxMethod<{criteria: AuthorisationCriteria | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return authorisationApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (data: AuthorisationListDTO[] | any[]) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
      searchPaged: rxMethod<{criteria: AuthorisationCriteriaTemplate<AuthorisationCriteria> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return authorisationApi.searchPaged(data.criteria, ).pipe(
            tapResponse({
              next: (data: Page<AuthorisationListDTO>[] | any[]) => {
                //patchState(
                  //store, 
                  // { 
                  //    data, 
                  //    loading: false, 
                  //    error: false,
                  //    success: true, 
                  //    messages: [] 
                  //}
                //);
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
