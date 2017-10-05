import React from 'react';
import {Redirect} from 'react-router-dom';

import auth from '../auth/auth';

class Landing extends React.Component {
  render() {
    if (!auth.isAuthenticated()) {
      auth.login();
    }

    console.log(localStorage.getItem('access_token'));

    return <Redirect to={{
      pathname: '/home'
    }}/>
  }
}

export default Landing;