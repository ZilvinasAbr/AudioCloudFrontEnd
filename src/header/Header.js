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

const Header = ({userName}) => (
  <header>
    <Menu borderless>
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
          <Button>{userName}</Button>
        </Menu.Item>
      </Container>
    </Menu>
  </header>
);

Header.propTypes = {
  userName: PropTypes.string.isRequired
};

export default Header;
