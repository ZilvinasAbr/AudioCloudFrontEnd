import React from 'react';
import PropTypes from 'prop-types';
import auth from './auth';

const Authentication = ({children}) => {
  if (!auth.isAuthenticated()) {
    auth.login();
    return <div/>;
  }

  return children;
};

Authentication.propTypes = {
  children: PropTypes.element.isRequired
};

export default Authentication;
