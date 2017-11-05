import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Loader
} from 'semantic-ui-react';

import * as paths from '../constants/RouterConstants';
import MainSong from '../common/MainSong';
import MainSongDescription from '../common/MainSongDescription';
import SongList from '../common/SongList';

class Playlist extends Component {
  componentDidMount() {
    const {fetchPlaylistIfNeeded, id} = this.props;

    fetchPlaylistIfNeeded(id);
  }

  componentWillReceiveProps(nextProps) {
    const {fetchPlaylistIfNeeded, id} = this.props;
    if (nextProps.id && nextProps.id !== id) {
      fetchPlaylistIfNeeded(nextProps.id);
    }
  }

  render() {
    const {playlist, currentSong} = this.props;

    if (!playlist) {
      return <Loader active/>;
    }

    const songUrls = playlist.songs.map(s => paths.PLAYLIST_SONG_PATH
      .replace(':playlistId', playlist.id)
      .replace(':songId', s.id));

    return (
      <Grid celled style={{ marginTop: '5em', marginBottom: '10em' }}>
        <Grid.Row>
          <Grid.Column width={4}>
            <SongList
              title={playlist.name}
              songs={playlist.songs}
              songUrls={songUrls}
            />
          </Grid.Column>
          <Grid.Column width={6} textAlign='center'>
            <MainSong
              title={currentSong.title}
              pictureUrl={currentSong.pictureUrl}
              likes={currentSong.likes}
              plays={currentSong.plays}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <MainSongDescription
              createdOn={currentSong.uploadDate}
              description={currentSong.description}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

Playlist.defaultProps = {
  playlist: null,
  currentSong: null
};

Playlist.propTypes = {
  id: PropTypes.number.isRequired,
  fetchPlaylistIfNeeded: PropTypes.func.isRequired,
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    songs: PropTypes.arrayOf(PropTypes.shape({}))
  }),
  currentSong: PropTypes.shape({})
};

export default Playlist;
