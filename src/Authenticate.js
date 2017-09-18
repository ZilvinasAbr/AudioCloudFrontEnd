import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

const Authenticate = () => (
  <GoogleLogin
    clientId="339876765359-f2onq0viecdsll6on3bao8imc2b48dpt.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
);

export default Authenticate;