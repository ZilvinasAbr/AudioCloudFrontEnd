import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Loader} from 'semantic-ui-react';

class FetchUser extends Component {
  componentDidMount() {
    const {fetchCurrentUser} = this.props;
    fetchCurrentUser();
  }

  render() {
    const {children, currentUser} = this.props;

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