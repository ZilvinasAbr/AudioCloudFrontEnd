import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Dropdown,
  Menu
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import CreatePlaylistModal from '../createPlaylist/CreatePlaylistModal';
import UploadSongModal from '../uploadSong/UploadSongModal';
import SearchInput from './SearchInput';
import * as paths from '../constants/RouterConstants';
import * as styles from '../styles';

const menuStyle = {
  'backgroundColor': styles.menuBackgroundColor
};

const buttonStyle = {
  'backgroundColor': styles.menuButtonColor
};

const HeaderDesktop = ({user, onSearch, logout}) => (
  <header>
    <Menu borderless fixed='top' style={menuStyle}>
      <Container>
        <Menu.Item>
          <Link to={paths.HOME_PATH}><Button style={buttonStyle}>Home</Button></Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={paths.GENRES_PATH}><Button style={buttonStyle}>Genres</Button></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput onSearch={onSearch} />
        </Menu.Item>
        <Menu.Item>
          <Link to={paths.LIBRARY_PATH}><Button style={buttonStyle}>Library</Button></Link>
        </Menu.Item>
        <Menu.Item>
          <Dropdown button text={user ? user.name : ''} style={buttonStyle}>
            <Dropdown.Menu>
              <Dropdown.Item><UploadSongModal/></Dropdown.Item>
              <Dropdown.Item><CreatePlaylistModal/></Dropdown.Item>
              <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Container>
    </Menu>
  </header>
);

HeaderDesktop.propTypes = {
  user: PropTypes.shape({}).isRequired,
  logout: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default HeaderDesktop;
