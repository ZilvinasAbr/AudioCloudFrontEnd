import React from 'react';
import {connect} from 'react-redux';

import Song from './Song';

import {fetchSongIfNeeded, fetchPopularSongs} from '../actions/SongActions';
import {getSongId} from '../selectors/RouterSelectors';
import {getSong, getPopularSongs} from '../selectors/SongSelectors';

const SongContainer = props => <Song {...props} />;

const mapStateToProps = (state) => ({
  id: getSongId(state),
  song: getSong(state),
  popularSongs: getPopularSongs(state)
});

export default connect(mapStateToProps, {
  fetchSongIfNeeded,
  fetchPopularSongs
})(SongContainer);