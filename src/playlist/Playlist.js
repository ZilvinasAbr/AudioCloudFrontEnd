import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Grid
} from 'semantic-ui-react';

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
    const {playlist} = this.props;

    if (!playlist) {
      return <div>Loading...</div>;
    }

    return (
      <Grid celled style={{ marginTop: '5em', marginBottom: '10em' }}>
        <Grid.Row>
          <Grid.Column width={4}>
            <SongList
              title={playlist.name}
              songs={playlist.songs}
            />
          </Grid.Column>
          <Grid.Column width={6} textAlign='center'>
            <MainSong
              title={playlist.songs[0].title}
              pictureUrl={playlist.songs[0].pictureUrl}
              likes={playlist.songs[0].likes}
              plays={playlist.songs[0].plays}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <MainSongDescription
              createdOn={playlist.songs[0].uploadDate}
              description={playlist.songs[0].description}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

Playlist.defaultProps = {
  playlist: null
};

Playlist.propTypes = {
  id: PropTypes.number.isRequired,
  fetchPlaylistIfNeeded: PropTypes.func.isRequired,
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    songs: PropTypes.arrayOf(PropTypes.shape({}))
  })
};

export default Playlist;
