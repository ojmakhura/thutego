import { APP_INITIALIZER, ApplicationConfig, Provider, importProvidersFrom, isDevMode } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';
import { TranslateModule } from '@ngx-translate/core';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { RouteReusableStrategy } from './@shared';
import { routes } from './app.routes';
import { UseCaseScope } from './utils/use-case-scope';
import { apiPrefixInterceptor } from './@core/http/api-prefix.interceptor';
import { errorHandlerInterceptor } from './@core/http/error-handler.interceptor';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    fetch('/env.json')
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error); // Handle errors
      })
      .then((env) =>
        keycloak.init({
          // Configuration details for Keycloak
          config: {
            url: env.authDomain, // URL of the Keycloak server
            realm: environment.keycloak.realm, // Realm to be used in Keycloak
            clientId: environment.keycloak.clientId, // Client ID for the application in Keycloak
          },
          // Options for Keycloak initialization
          initOptions: {
            onLoad: 'login-required', // Action to take on load
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html', // URI for silent SSO checks
          },
          // Enables Bearer interceptor
          enableBearerInterceptor: true,
          // Prefix for the Bearer token
          bearerPrefix: 'Bearer',
          // URLs excluded from Bearer token addition (empty by default)
          bearerExcludedUrls: []
        }),
      );
}

// Provider for Keycloak Bearer Interceptor
const KeycloakBearerInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: KeycloakBearerInterceptor,
  multi: true,
};

// Provider for Keycloak Initialization
const KeycloakInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  multi: true,
  deps: [KeycloakService],
};

export const appConfig: ApplicationConfig = {
  providers: [
    UseCaseScope,
    provideRouter(routes),
    KeycloakInitializerProvider, // Initializes Keycloak
    KeycloakBearerInterceptorProvider, // Provides Keycloak Bearer Interceptor
    KeycloakService, // Service for Keycloak
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([apiPrefixInterceptor, errorHandlerInterceptor])),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    importProvidersFrom(
      StoreDevtoolsModule.instrument({}),
      TranslateModule.forRoot(),
      ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    ),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
  ],
};
