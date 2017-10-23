import React from 'react';
import {connect} from 'react-redux';

import Song from './Song';

import {fetchSongIfNeeded, fetchTrendingSongs} from '../actions/SongActions';
import {getSongId} from '../selectors/RouterSelectors';
import {getSong, getTrendingSongs} from '../selectors/SongSelectors';

const SongContainer = props => <Song {...props} />;

const mapStateToProps = (state) => ({
  id: getSongId(state),
  song: getSong(state),
  trendingSongs: getTrendingSongs(state)
});

export default connect(mapStateToProps, {
  fetchSongIfNeeded,
  fetchTrendingSongs
})(SongContainer);