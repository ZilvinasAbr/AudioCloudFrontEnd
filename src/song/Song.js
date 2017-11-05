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

class Song extends Component {
  componentDidMount() {
    const {fetchSongIfNeeded, fetchPopularSongs, id} = this.props;

    fetchSongIfNeeded(id);
    fetchPopularSongs();
  }

  componentWillReceiveProps(nextProps) {
    const {fetchSongIfNeeded, fetchPopularSongs, id} = this.props;
    if (nextProps.id && nextProps.id !== id) {
      fetchSongIfNeeded(nextProps.id);
      fetchPopularSongs();
    }
  }

  render() {
    const {song, popularSongs} = this.props;

    if (!song) {
      return <Loader active/>;
    }

    const songUrls = popularSongs.map(s => paths.SONG_PATH.replace(':id', s.id));

    return (
      <Grid celled style={{ marginTop: '5em', marginBottom: '10em' }}>
        <Grid.Row>
          <Grid.Column width={4}>
            <SongList
              title='Popular'
              songs={popularSongs}
              songUrls={songUrls}
            />
          </Grid.Column>
          <Grid.Column width={6} textAlign='center'>
            <MainSong
              title={song.title}
              pictureUrl={song.pictureUrl}
              likes={song.likes}
              plays={song.plays}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <MainSongDescription
              createdOn={song.uploadDate}
              description={song.description}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

Song.defaultProps = {
  song: null,
  popularSongs: []
};

Song.propTypes = {
  id: PropTypes.number.isRequired,
  fetchSongIfNeeded: PropTypes.func.isRequired,
  song: PropTypes.shape({}),
  popularSongs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchPopularSongs: PropTypes.func.isRequired
};

export default Song;