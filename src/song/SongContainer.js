import React from 'react';
import {connect} from 'react-redux';

import Song from './Song';

import {fetchSongIfNeeded, fetchPopularSongs} from '../actions/SongActions';
import {playSong} from '../actions/PlayerActions';
import {getSongId} from '../selectors/RouterSelectors';
import {getIsPlaying} from '../selectors/PlayerSelectors';
import {getSong, getPopularSongs} from '../selectors/SongSelectors';

const SongContainer = props => <Song {...props} />;

const mapStateToProps = (state) => ({
  id: getSongId(state),
  song: getSong(state),
  popularSongs: getPopularSongs(state),
  isPlaying: getIsPlaying(state)
});

export default connect(mapStateToProps, {
  fetchSongIfNeeded,
  fetchPopularSongs,
  playSong
})(SongContainer);