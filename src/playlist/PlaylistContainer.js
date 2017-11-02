import React from 'react';
import {connect} from 'react-redux';

import Playlist from './Playlist';

import {fetchPlaylistIfNeeded} from '../actions/PlaylistActions';
import {getPlaylistId} from '../selectors/RouterSelectors';
import {getPlaylist} from '../selectors/PlaylistSelectors';

const PlaylistContainer = props => <Playlist {...props} />;

const mapStateToProps = (state) => ({
  id: getPlaylistId(state),
  playlist: getPlaylist(state)
});

export default connect(mapStateToProps, {
  fetchPlaylistIfNeeded
})(PlaylistContainer);