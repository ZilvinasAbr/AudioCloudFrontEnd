import React from 'react';
import GoogleLogin from 'react-google-login';
import api from './apiService';

const responseGoogle = async (response) => {
  debugger;

  const headers = new Headers();
  headers.set('Authorization', `Bearer ${response.access_token}`);

  const json = await (await api.get('/api/values', headers)).json();
  console.log(json);
};

const Authenticate = () => (
  <GoogleLogin
    clientId="339876765359-f2onq0viecdsll6on3bao8imc2b48dpt.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
);

export default Authenticate;