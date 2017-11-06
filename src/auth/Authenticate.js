import React from 'react';
import auth from './auth';
import {Redirect} from 'react-router-dom';
import {Loader} from 'semantic-ui-react';

import * as paths from '../constants/RouterConstants';
import {registerUser} from '../actions/UserActions';

class Authenticate extends React.Component {
  state = {
    isAuthenticated: false
  };

  async componentDidMount() {
    const isAuthenticated = await auth.handleAuthentication();

    if (isAuthenticated) {
      await registerUser()();
    }

    this.setState({isAuthenticated});
  }

  render() {
    const {isAuthenticated} = this.state;

    return isAuthenticated ? <Redirect to={{
      pathname: paths.HOME_PATH
    }}/> : <Loader active/>;
  }
}

export default Authenticate;