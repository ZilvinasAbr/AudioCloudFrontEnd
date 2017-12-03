import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Menu
} from 'semantic-ui-react';

import * as styles from '../styles';
import SongInfo from './SongInfo';
import MusicPlayer from './MusicPlayer';

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
    <MusicPlayer
      currentSong={currentSong}
      audioUrl={currentSong.filePath}
      isPlaying={isPlaying}
      onPause={onPause}
      onPlay={onPlay}
      onTimeUpdate={onTimeUpdate}
      onLoadedMetadata={onLoadedMetadata}
      currentTime={currentTime}
      duration={duration}
    />
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
