import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FetchUser extends Component {
  componentDidMount() {
    const {fetchCurrentUser} = this.props;
    fetchCurrentUser();
  }

  render() {
    const {children, currentUser} = this.props;

    if (!currentUser) {
      return <div>Loading...</div>;
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