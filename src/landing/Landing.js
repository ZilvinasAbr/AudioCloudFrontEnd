import React from 'react';
import {Redirect} from 'react-router-dom';

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
      pathname: '/home'
    }}/> : null;
  }
}

export default Landing;
