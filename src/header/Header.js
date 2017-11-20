import React from 'react';
import PropTypes from 'prop-types';
import {
  Responsive
} from 'semantic-ui-react';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = ({user, onSearch, logout}) => (
  <div>
    <Responsive maxWidth={764}>
      <HeaderMobile user={user} logout={logout} onSearch={onSearch}/>
    </Responsive>
    <Responsive minWidth={765}>
      <HeaderDesktop user={user} logout={logout} onSearch={onSearch}/>
    </Responsive>
  </div>
);

Header.propTypes = {
  user: PropTypes.shape({}).isRequired,
  logout: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Header;
