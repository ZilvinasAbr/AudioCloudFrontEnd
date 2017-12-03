import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Dropdown,
  Menu
} from 'semantic-ui-react';
import BlackLink from '../common/BlackLink';
import MainButton from '../common/MainButton';

import CreatePlaylistModal from '../createPlaylist/CreatePlaylistModal';
import UploadSongModal from '../uploadSong/UploadSongModal';
import SearchInput from './SearchInput';
import * as paths from '../constants/RouterConstants';
import * as styles from '../styles';

const menuStyle = {
  'backgroundColor': styles.menuBackgroundColor
};

const HeaderDesktop = ({user, onSearch, logout}) => (
  <header>
    <Menu borderless fixed='top' style={menuStyle}>
      <Container>
        <Menu.Item>
          <BlackLink to={paths.HOME_PATH}><MainButton>Home</MainButton></BlackLink>
        </Menu.Item>
        <Menu.Item>
          <BlackLink to={paths.GENRES_PATH}><MainButton>Genres</MainButton></BlackLink>
        </Menu.Item>
        <Menu.Item>
          <SearchInput onSearch={onSearch}/>
        </Menu.Item>
        <Menu.Item>
          <BlackLink to={paths.LIBRARY_PATH}><MainButton>Library</MainButton></BlackLink>
        </Menu.Item>
        <Menu.Item>
          <Button.Group color='orange'>
            <Dropdown button text={user ? user.name : ''}>
              <Dropdown.Menu>
                <Dropdown.Item><UploadSongModal/></Dropdown.Item>
                <Dropdown.Item><CreatePlaylistModal/></Dropdown.Item>
                <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Button.Group>
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
