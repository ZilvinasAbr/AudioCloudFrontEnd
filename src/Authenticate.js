import React from 'react';
import auth from './auth/auth';
import {Redirect} from 'react-router-dom';

const Authenticate = () => {
  auth.handleAuthentication();
  return <Redirect to={{
    pathname: '/home'
  }}/>
};

export default Authenticate;