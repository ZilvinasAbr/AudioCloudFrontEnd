import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Dropdown,
  Menu
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import SearchInput from './SearchInput';
import * as paths from '../constants/RouterConstants';

const HeaderMobile = ({user, onSearch, logout}) => (
  <header>
    <Menu borderless fixed='top'>
      <Container>
        <Menu.Item>
          <Dropdown icon='bars' button>
            <Dropdown.Menu>
              <Dropdown.Item>
                {user ? user.name : ''}
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={paths.HOME_PATH}>Home</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={paths.GENRES_PATH}>Genres</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={paths.LIBRARY_PATH}>Library</Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <SearchInput onSearch={onSearch}/>
        </Menu.Item>
      </Container>
    </Menu>
  </header>
);

HeaderMobile.propTypes = {
  user: PropTypes.shape({}).isRequired,
  logout: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default HeaderMobile;
