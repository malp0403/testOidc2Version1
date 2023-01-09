import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { AccountComponent } from './app/account/account.component';
import { AppComponent } from './app/app.component';

import { AppModule } from './app/app.module';

// bootstrapApplication(AccountComponent, {
//   providers: [
//     provideHttpClient(),
//     provideOAuthClient()
//   ]
// });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
