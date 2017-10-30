import React from 'react';
import {connect} from 'react-redux';

import Library from './Library';

import {fetchLikedPlaylist, fetchUploadedSongs, fetchUserPlaylists} from '../actions/LibraryActions';
import {getLikedPlaylist, getUploadedSongs, getUserPlaylists} from '../selectors/LibrarySelectors';

const LibraryContainer = props => <Library {...props} />;

const mapStateToProps = (state) => ({
  likedPlaylist: getLikedPlaylist(state),
  uploaded: getUploadedSongs(state),
  playlists: getUserPlaylists(state)
});

export default connect(mapStateToProps, {
  fetchLikedPlaylist,
  fetchUploadedSongs,
  fetchUserPlaylists
})(LibraryContainer);