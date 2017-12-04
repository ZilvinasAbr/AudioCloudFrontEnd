import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container} from 'semantic-ui-react';

import * as paths from '../constants/RouterConstants';
import ShowAllList from './ShowAllList';

class Library extends Component {
  async componentDidMount() {
    const {currentUser, fetchLikedPlaylist, fetchUploadedSongs, fetchUserPlaylists} = this.props;
    const {name} = currentUser;
    const initialAmount = 4;

    fetchLikedPlaylist(initialAmount);
    fetchUploadedSongs(name, initialAmount);
    fetchUserPlaylists(name, initialAmount);
  }

  render() {
    const {
      fetchLikedPlaylist,
      fetchUploadedSongs,
      fetchUserPlaylists,
      likedPlaylist,
      uploaded,
      playlists,
      currentUser: {name}
    } = this.props;

    return (
      <Container style={{ marginTop: '5em', marginBottom: '10em' }}>
        <ShowAllList
          title='Likes'
          elements={likedPlaylist && likedPlaylist.songs.map(s => ({
            title: s.title,
            imageUrl: s.pictureUrl,
            linkUrl: paths.SONG_PATH.replace(':id', s.id)
          }))}
          onShowAll={() => fetchLikedPlaylist()}
        />
        <ShowAllList
          title='Songs Uploaded'
          elements={uploaded && uploaded.map(s => ({
            title: s.title,
            imageUrl: s.pictureUrl,
            linkUrl: paths.SONG_PATH.replace(':id', s.id)
          }))}
          onShowAll={() => fetchUploadedSongs(name)}
        />
        <ShowAllList
          title='Playlists'
          elements={playlists && playlists.map(p => ({
            title: p.name,
            imageUrl: p.songs.length ? p.songs[0].pictureUrl : 'http://via.placeholder.com/1024x1024',
            linkUrl: paths.PLAYLIST_PATH.replace(':playlistId', p.id)
          }))}
          onShowAll={() => fetchUserPlaylists(name)}
        />
      </Container>
    )
  }
}

Library.defaultProps = {
  likedPlaylist: null,
  uploaded: null,
  playlists: null,
  currentUser: null
};

Library.propTypes = {
  likedPlaylist: PropTypes.shape({}),
  uploaded: PropTypes.arrayOf(PropTypes.shape({})),
  playlists: PropTypes.arrayOf(PropTypes.shape({})),
  currentUser: PropTypes.shape({}).isRequired,
  fetchLikedPlaylist: PropTypes.func.isRequired,
  fetchUploadedSongs: PropTypes.func.isRequired,
  fetchUserPlaylists: PropTypes.func.isRequired,
};

export default Library;
