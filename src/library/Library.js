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
    fetchUploadedSongs();
    fetchUserPlaylists();
  }

  render() {
    const {likes} = this.props;

    return (
      <Container style={{ marginTop: '5em', marginBottom: '10em' }}>
        <Likes
          likes={likes}
          onShowAll={() => {}}
        />
        <Uploaded/>
        <Playlists/>
      </Container>
    )
  }
}

Library.defaultProps = {
  likes: [],
  uploaded: [],
  playlists: []
};

Library.propTypes = {
  likes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  uploaded: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  playlists: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchLikedPlaylist: PropTypes.func.isRequired,
  fetchUploadedSongs: PropTypes.func.isRequired,
  fetchUserPlaylists: PropTypes.func.isRequired
};

export default Library;
