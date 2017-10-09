import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Input,
  Menu
} from 'semantic-ui-react';

const Header = ({userName}) => (
  <header>
    <Menu borderless>
      <Container>
        <Menu.Item>
          <Button>Home</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Genres</Button>
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search...'/>
        </Menu.Item>
        <Menu.Item>
          <Button>Library</Button>
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
