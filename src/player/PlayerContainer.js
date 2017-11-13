import React from 'react';
import {connect} from 'react-redux';

import Player from './Player';
import {
  onPause,
  onPlay,
  onTimeUpdate,
  onLoadedMetadata,
} from '../actions/PlayerActions';
import {
  getCurrentSong,
  getIsPlaying,
  getCurrentTime,
  getDuration
} from "../selectors/PlayerSelectors";

const PlayerContainer = props => <Player {...props} />;

const mapStateToProps = (state) => ({
  currentSong: getCurrentSong(state),
  isPlaying: getIsPlaying(state),
  currentTime: getCurrentTime(state),
  duration: getDuration(state)
});

export default connect(mapStateToProps, {
  onPause,
  onPlay,
  onTimeUpdate,
  onLoadedMetadata
})(PlayerContainer);