import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container} from 'semantic-ui-react';

import Likes from './Likes';
import Uploaded from './Uploaded';
import Playlists from './Playlists';

class Library extends Component {
  async componentDidMount() {
    const {fetchLikedPlaylist, fetchUploadedSongs, fetchUserPlaylists} = this.props;
    fetchLikedPlaylist();
    fetchUploadedSongs('Test Client');
    fetchUserPlaylists('Test Client');
  }

  render() {
    const {likedPlaylist, uploaded, playlists} = this.props;

    return (
      <Container style={{ marginTop: '5em', marginBottom: '10em' }}>
        <Likes
          likedPlaylist={likedPlaylist}
          onShowAll={() => {}}
        />
        <Uploaded
          songs={uploaded}
          onShowAll={() => {}}
        />
        <Playlists
          playlists={playlists}
          onShowAll={() => {}}
        />
      </Container>
    )
  }
}

Library.defaultProps = {
  likedPlaylist: null,
  uploaded: [],
  playlists: []
};

Library.propTypes = {
  likedPlaylist: PropTypes.shape({}),
  uploaded: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  playlists: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchLikedPlaylist: PropTypes.func.isRequired,
  fetchUploadedSongs: PropTypes.func.isRequired,
  fetchUserPlaylists: PropTypes.func.isRequired
};

export default Library;
