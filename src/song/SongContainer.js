import React from 'react';
import { connect } from 'react-redux';
import Song from './Song';

import {fetchSongIfNeeded} from '../actions/SongActions';
import {getSongId} from '../selectors/RouterSelectors';
import {getSong} from '../selectors/SongSelectors';

const SongContainer = props => <Song {...props} />;

const mapStateToProps = (state) => {
  return {
    id: getSongId(state),
    song: getSong(state)
  };
};

export default connect(mapStateToProps, {
  fetchSongIfNeeded
})(SongContainer);