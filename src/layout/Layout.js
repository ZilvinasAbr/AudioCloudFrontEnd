import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({children, currentUser, goToSearchSongs, logout}) => (
  <div>
    <Header
      onSearch={goToSearchSongs}
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
  goToSearchSongs: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default Layout;
