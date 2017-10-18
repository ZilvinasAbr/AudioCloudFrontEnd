import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import mockUsers from '../mockData/mockUsers';

const Layout = ({children}) => (
  <div>
    <Header
      userName={mockUsers[0].userName}
    />
    {children}
    <Footer/>
  </div>
);

export default Layout;
