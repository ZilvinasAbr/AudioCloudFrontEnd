import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({children, currentUser}) => (
  <div>
    <Header
      user={currentUser}
    />
    {children}
    <Footer/>
  </div>
);

Layout.defaultProps = {
  currentUser: null
};

Layout.propTypes = {
  currentUser: PropTypes.shape({})
};

export default Layout;
