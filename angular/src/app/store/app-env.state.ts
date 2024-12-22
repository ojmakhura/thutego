import { Menu } from '@app/model/menu/menu';
import { SelectItem } from '@app/utils/select-item';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { of, switchMap } from 'rxjs';

export type AppEnvState = {
  env?: any;
  loading?: boolean;
  error?: any;
  realmRoles: SelectItem[];
  menus: Menu[];
  isLoggedIn: boolean;
  accountUri?: string | null;
  username: string | null;
};

const initialState: AppEnvState = {
  env: null,
  error: null,
  loading: false,
  realmRoles: [],
  menus: [],
  isLoggedIn: false,
  accountUri: null,
  username: null,
};

export const AppEnvStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    return {
      reset: () => {
        patchState(store, initialState);
      },
      getEnv: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true });
          return fetch('/env.json')
            .then((response) => response.json())
            .then((env) => {
              patchState(store, { env, loading: false, error: false });
            })
            .catch((error) => {
              patchState(store, { error, loading: false });
            });
        }),
      ),
      addRealmRole: rxMethod<SelectItem>(
        switchMap((role) => {
          patchState(store, { realmRoles: [...store.realmRoles(), role] });
          return of(store.realmRoles());
        }),
      ),
      addMenu: rxMethod<Menu>(
        switchMap((menu) => {
          patchState(store, { menus: [...store.menus(), menu] });
          return of(store.menus());
        }),
      ),
      setIsLoggedIn: rxMethod<boolean>(
        switchMap((isLoggedIn) => {
          patchState(store, { isLoggedIn });
          return of(store.isLoggedIn);
        }),
      ),
      setAccountUri: rxMethod<string | null>(
        switchMap((accountUri) => {
          patchState(store, { accountUri });
          return of(store.accountUri);
        }),
      ),
      setUsername: rxMethod<string | null>(
        switchMap((username) => {
          patchState(store, { username });
          return of(store.username);
        }),
      ),
    };
  }),
);
