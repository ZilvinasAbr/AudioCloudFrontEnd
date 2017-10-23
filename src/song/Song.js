import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Grid
} from 'semantic-ui-react';

import MainSong from '../common/MainSong';
import MainSongDescription from '../common/MainSongDescription';
import SongList from '../common/SongList';

class Song extends Component {
  componentDidMount() {
    const {fetchSongIfNeeded, fetchTrendingSongs, id} = this.props;

    fetchSongIfNeeded(id);
    fetchTrendingSongs();
  }

  componentWillReceiveProps(nextProps) {
    const {fetchSongIfNeeded, fetchTrendingSongs, id} = this.props;
    if (nextProps.id !== id) {
      fetchSongIfNeeded(nextProps.id);
      fetchTrendingSongs();
    }
  }

  render() {
    const {song, trendingSongs} = this.props;

    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>
            <SongList
              title='Suggestions'
              songs={trendingSongs}
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
  trendingSongs: []
};

Song.propTypes = {
  id: PropTypes.number.isRequired,
  fetchSongIfNeeded: PropTypes.func.isRequired,
  song: PropTypes.shape({}),
  trendingSongs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchTrendingSongs: PropTypes.func.isRequired
};

export default Song;