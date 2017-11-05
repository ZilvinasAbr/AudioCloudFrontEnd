import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {Loader} from 'semantic-ui-react';

import * as paths from '../constants/RouterConstants';
import auth from '../auth/auth';

class FetchUser extends Component {
  componentDidMount() {
    const {fetchCurrentUser} = this.props;
    fetchCurrentUser();
  }

  render() {
    const {children, currentUser} = this.props;

    if (!auth.isAuthenticated()) {
      return <Redirect to={{
        pathname: paths.LANDING_PATH
      }}/>
    }

    if (!currentUser) {
      return <Loader active/>;
    }

    return children;
  }
}

FetchUser.defaultProps = {
  currentUser: null
};

FetchUser.propTypes = {
  currentUser: PropTypes.shape({}),
  fetchCurrentUser: PropTypes.func.isRequired
};

export default FetchUser;