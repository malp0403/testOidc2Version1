import { Component } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthService } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  // issuer: 'https://idsvr4.azurewebsites.net',
  issuer: 'https://dev.housingmatters.lmslab.net/id4',

  // URL of the SPA to redirect the user to after login
  redirectUri: 'http://localhost:7200/',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  // clientId: 'spa',
  clientId: 'publicweb',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'token',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  // scope: 'openid profile email offline_access api',
  //scope: 'openid profile email usermanagementapi publicapi',
  scope: 'openid profile email',

  showDebugInformation: true,
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testOidc2Version1';
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }

  login() {
    this.oauthService.initCodeFlow();

  }
  logout() {
    this.oauthService.logOut();

  }
}
