import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Menu
} from 'semantic-ui-react';

import SongInfo from './SongInfo';
import MusicPlayer from './MusicPlayer';
import mockSongs from '../mockData/mockSongs';

const Player = ({currentSong}) =>
  currentSong && (
    <Menu fixed='bottom'>
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={4}>
            <SongInfo
              title={currentSong.title}
              uploaderName={currentSong.user.name}
              pictureUrl={currentSong.pictureUrl}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <MusicPlayer/>
          </Grid.Column>
          <Grid.Column width={6}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Menu>
  );

Player.propTypes = {
  currentSong: PropTypes.shape({})
};

export default Player;
