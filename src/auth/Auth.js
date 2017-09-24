import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'audiocloud.eu.auth0.com',
    clientID: 'BEeX4kOf2D8EPcaODbNEQ4jFX5gacBSb',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://audiocloud.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}