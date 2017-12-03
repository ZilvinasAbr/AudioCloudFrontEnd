import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Menu
} from 'semantic-ui-react';

import * as styles from '../styles';
import SongInfo from './SongInfo';
import MusicPlayer from './MusicPlayer';

const playerStyle = {
  'backgroundColor': styles.playerBackground
};

const PlayerDesktop =
  ({
     isPlaying,
     currentSong,
     currentTime,
     duration,
     onPause,
     onPlay,
     onTimeUpdate,
     onLoadedMetadata
   }) =>
  currentSong && (
    <Menu fixed='bottom' style={playerStyle}>
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
            <MusicPlayer
              audioUrl={currentSong.filePath}
              isPlaying={isPlaying}
              onPause={onPause}
              onPlay={onPlay}
              onTimeUpdate={onTimeUpdate}
              onLoadedMetadata={onLoadedMetadata}
              currentTime={currentTime}
              duration={duration}
            />
          </Grid.Column>
          <Grid.Column width={6}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Menu>
  );

PlayerDesktop.propTypes = {
  currentSong: PropTypes.shape({}),
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPause: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onLoadedMetadata: PropTypes.func.isRequired
};

export default PlayerDesktop;
