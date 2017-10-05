import promisify from 'es6-promisify';
import auth0 from 'auth0-js';

import {getFrontEndUrl} from '../environmentConfig';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'audiocloud.eu.auth0.com',
    clientID: 'BEeX4kOf2D8EPcaODbNEQ4jFX5gacBSb',
    redirectUri: `${getFrontEndUrl()}/authenticate`,
    audience: 'saitynoprojektas.azurewebsites.net',
    responseType: 'token id_token',
    scope: 'openid'
  });

  handleAuthentication = async () => {
    const parseHashPromisified = promisify(this.auth0.parseHash);

    try {
      debugger;
      const authResult = await parseHashPromisified();
      debugger;
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        return true;
      }

      return false;
    } catch(err) {
      console.log(err);
      return false;
    }
  };

  setSession = (authResult) => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  };

  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
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
}

export default new Auth();