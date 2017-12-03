import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Dropdown,
  Menu
} from 'semantic-ui-react';
import BlackLink from '../common/BlackLink';

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

const HeaderMobile = ({user, onSearch, logout}) => (
  <header>
    <Menu borderless fixed='top' style={menuStyle}>
      <Container>
        <Menu.Item>
          <Dropdown icon='bars' button>
            <Dropdown.Menu>
              <Dropdown.Item>
                {user ? user.name : ''}
              </Dropdown.Item>
              <Dropdown.Item>
                <BlackLink to={paths.HOME_PATH}>Home</BlackLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <BlackLink to={paths.GENRES_PATH}>Genres</BlackLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <BlackLink to={paths.LIBRARY_PATH}>Library</BlackLink>
              </Dropdown.Item>
              <Dropdown.Item><UploadSongModal/></Dropdown.Item>
              <Dropdown.Item><CreatePlaylistModal/></Dropdown.Item>
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
