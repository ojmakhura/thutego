
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { InstitutionVO } from '@app/model/bw/co/roguesystems/thutego/institution/institution-vo';
import { InstitutionApi } from '@app/service/bw/co/roguesystems/thutego/institution/institution-api';

const initialState: AppState<InstitutionVO | undefined, InstitutionVO> = {
  data: undefined,
  dataList: [],
  dataPage: new Page<InstitutionVO>(),
  searchCriteria: new SearchObject<string>(),
  error: null,
  loading: false,
  success: false,
  messages: [],
  loaderMessage: ''
};

export const InstitutionApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const institutionApi = inject(InstitutionApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{ id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return institutionApi.findById(data.id,).pipe(
            tapResponse({
              next: (data: any) => {
                patchState(store, { data, loading: false, success: true, messages: [`Found institution with id ${data.name}`] });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false, messages: [error?.error ? error.error : error]});
              },
            }),
          );
        }),
      ),
      getAll: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true });
          return institutionApi.getAll().pipe(
            tapResponse({
              next: (institutions: InstitutionVO[]) => {
                patchState(store, { dataList: institutions, loading: false, success: true, messages: [`Found ${institutions.length} institutions`] });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false, messages: [error?.error ? error.error : error] });
              },
            }),
          );
        }),
      ),
      getAllPaged: rxMethod<{ pageNumber: number | any, pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return institutionApi.getAllPaged(data.pageNumber, data.pageSize,).pipe(
            tapResponse({
              next: (institutionsPage: Page<InstitutionVO>) => {
                patchState(store, { dataPage: institutionsPage, loading: false, success: true, messages: [`Found ${institutionsPage.numberOfElements} of page ${institutionsPage.number}`] });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false, messages: [error?.error ? error.error : error] });
              },
            }),
          );
        }),
      ),
      pagedSearch: rxMethod<{ criteria: SearchObject<string> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return institutionApi.pagedSearch(data.criteria,).pipe(
            tapResponse({
              next: (institutionPage: Page<InstitutionVO> | any) => {
                patchState(store, { dataPage: institutionPage, loading: false, success: true, messages: [`Found ${institutionPage.numberOfElements} of page ${institutionPage.number}`] });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false, messages: [error?.error ? error.error : error] });
              },
            }),
          );
        }),
      ),
      remove: rxMethod<{ id: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return institutionApi.remove(data.id,).pipe(
            tapResponse({
              next: (removed: boolean) => {
                patchState(store, { loading: false, success: true , messages: [`Removed institution with id ${data.id}`] });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false, messages: [error?.error ? error.error : error] });
              },
            }),
          );
        }),
      ),
      save: rxMethod<{ institution: InstitutionVO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return institutionApi.save(data.institution,).pipe(
            tapResponse({
              next: (institution: InstitutionVO) => {
                patchState(store, { data: institution, loading: false, success: true, messages: [`Saved institution with id ${institution.name}`] });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false, messages: [error?.error ? error.error : error]});
              },
            }),
          );
        }),
      ),
      search: rxMethod<{ criteria: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true });
          return institutionApi.search(data.criteria,).pipe(
            tapResponse({
              next: (institutions: InstitutionVO[]) => {
                patchState(store, { dataList: institutions, loading: false, success: true, messages: [`Found ${institutions.length} institutions`] });
              },
              error: (error: any) => {
                patchState(store, { error, loading: false, success: false, messages: [error?.error ? error.error : error] });
              },
            }),
          );
        }),
      ),
    }
  }),
);
