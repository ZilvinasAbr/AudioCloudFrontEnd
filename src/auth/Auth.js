import auth0 from 'auth0-js';
import {getFrontEndUrl} from '../environmentConfig';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'audiocloud.eu.auth0.com',
    clientID: 'BEeX4kOf2D8EPcaODbNEQ4jFX5gacBSb',
    redirectUri: `${getFrontEndUrl()}/callback`,
    audience: 'saitynoprojektas.azurewebsites.net',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}