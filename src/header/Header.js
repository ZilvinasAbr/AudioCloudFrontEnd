import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Input,
  Menu
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import * as paths from '../constants/RouterConstants';

const Header = ({user}) => (
  <header>
    <Menu borderless fixed='top'>
      <Container>
        <Menu.Item>
          <Link to={paths.HOME_PATH}><Button>Home</Button></Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={paths.GENRES_PATH}><Button>Genres</Button></Link>
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search...'/>
        </Menu.Item>
        <Menu.Item>
          <Link to={paths.LIBRARY_PATH}><Button>Library</Button></Link>
        </Menu.Item>
        <Menu.Item>
          <Button>{user.name}</Button>
        </Menu.Item>
      </Container>
    </Menu>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Header;
