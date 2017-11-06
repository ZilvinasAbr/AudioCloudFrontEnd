import auth0 from 'auth0-js';

import {getFrontEndUrl, getBackEndUrl} from '../environmentConfig';

class Auth {
  constructor() {
    this.scheduleRenewal();
  }

  auth0 = new auth0.WebAuth({
    domain: 'audiocloud.eu.auth0.com',
    clientID: 'BEeX4kOf2D8EPcaODbNEQ4jFX5gacBSb',
    redirectUri: `${getFrontEndUrl()}/authenticate`,
    audience: 'saitynoprojektas.azurewebsites.net',
    responseType: 'token id_token',
    scope: 'openid'
  });

  handleAuthentication = () => {
    return new Promise((resolve) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve(true);
        } else if (err) {
          console.error('Could not handle authentication', err);
          resolve(false);
        }
        resolve(false);
      });
    });
  };

  setSession = (authResult) => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    // schedule a token renewal
    this.scheduleRenewal();
  };

  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    clearTimeout(this.tokenRenewalTimeout);
  };

  login() {
    this.auth0.authorize();
  }

  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };

  renewToken() {
    this.auth0.renewAuth(
      {
        audience: 'saitynoprojektas.azurewebsites.net',
        redirectUri: `${getBackEndUrl()}/silent`,
        usePostMessage: true
      }, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          this.setSession(result);
        }
      }
    );
  }

  scheduleRenewal() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const delay = expiresAt - Date.now();
    if (delay > 0) {
      this.tokenRenewalTimeout = setTimeout(() => {
        this.renewToken();
      }, delay);
    }
  }
}


export default new Auth();