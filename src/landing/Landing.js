import React from 'react';
import {Redirect} from 'react-router-dom';

import auth from '../auth/auth';

class Landing extends React.Component {
  render() {
    if (!auth.isAuthenticated()) {
      auth.login();
    }

    return <Redirect to={{
      pathname: '/home'
    }}/>
  }
}

export default Landing;