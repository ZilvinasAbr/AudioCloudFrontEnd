import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import mockUsers from '../mockData/mockUsers';

const Layout = ({children}) => (
  <div>
    <Header
      user={mockUsers[0]}
    />
    {children}
    <Footer/>
  </div>
);

export default Layout;
