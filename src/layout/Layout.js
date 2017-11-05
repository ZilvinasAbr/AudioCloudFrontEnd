import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({children, currentUser, logout}) => (
  <div>
    <Header
      user={currentUser}
      logout={logout}
    />
    {children}
    <Footer/>
  </div>
);

Layout.defaultProps = {
  currentUser: null
};

Layout.propTypes = {
  currentUser: PropTypes.shape({}),
  logout: PropTypes.func.isRequired
};

export default Layout;
