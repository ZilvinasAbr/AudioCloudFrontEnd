import React from 'react';
import {connect} from 'react-redux';

import Player from './Player';
import {onPause, onPlay} from '../actions/PlayerActions';
import {getCurrentSong, getIsPlaying} from "../selectors/PlayerSelectors";

const PlayerContainer = props => <Player {...props} />;

const mapStateToProps = (state) => ({
  currentSong: getCurrentSong(state),
  isPlaying: getIsPlaying(state)
});

export default connect(mapStateToProps, {
  onPause,
  onPlay
})(PlayerContainer);