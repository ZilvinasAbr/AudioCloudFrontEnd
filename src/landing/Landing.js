import React from 'react';
import {Redirect} from 'react-router-dom';

import * as paths from '../constants/RouterConstants';
import auth from '../auth/auth';

class Landing extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    if (!auth.isAuthenticated()) {
      auth.login();
    } else {
      this.setState({redirect: true});
    }
  }

  render() {
    return this.state.redirect ? <Redirect to={{
      pathname: paths.HOME_PATH
    }}/> : null;
  }
}

export default Landing;
