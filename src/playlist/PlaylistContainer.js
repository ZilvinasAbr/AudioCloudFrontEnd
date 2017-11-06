import React from 'react';
import {connect} from 'react-redux';

import Playlist from './Playlist';

import {fetchPlaylistIfNeeded} from '../actions/PlaylistActions';
import {playSong} from "../actions/PlayerActions";
import {getPlaylistId} from '../selectors/RouterSelectors';
import {getPlaylist, getCurrentSong} from '../selectors/PlaylistSelectors';

const PlaylistContainer = props => <Playlist {...props} />;

const mapStateToProps = (state) => ({
  id: getPlaylistId(state),
  currentSong: getCurrentSong(state),
  playlist: getPlaylist(state)
});

export default connect(mapStateToProps, {
  fetchPlaylistIfNeeded,
  playSong
})(PlaylistContainer);