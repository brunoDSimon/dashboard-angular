import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import {provideNgxWebstorage, withLocalStorage, withNgxWebstorageConfig, withSessionStorage} from 'ngx-webstorage';
import { TokenInterceptor } from './features/login/interceptor/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    provideNgxWebstorage(
      withNgxWebstorageConfig({ separator: ':', caseSensitive: true }),
			withLocalStorage(),
			withSessionStorage(),
    ),
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},

  ]
};
