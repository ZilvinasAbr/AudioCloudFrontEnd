import React from 'react';
import GoogleLogin from 'react-google-login';
import api from './apiService';

const responseGoogle = async (response) => {
  debugger;

  console.log(response);

  const headers = new Headers();
  headers.set('Authorization', `Bearer ${response.accessToken}`);

  try {
    const response2 = await api.get('/api/values', headers);
    const json = await response2.json();
    console.log(json);
  } catch(error) {
    console.error(error);
  }
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