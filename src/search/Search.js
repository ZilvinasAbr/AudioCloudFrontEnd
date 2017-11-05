import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Header,
  Loader
} from 'semantic-ui-react';

import * as paths from '../constants/RouterConstants';
import SongList from '../common/SongList';
import GenreSongsList from '../genres/GenreSongsList';

class Search extends Component {
  componentDidMount() {
    const {fetchSearchSongs, fetchPopularSongs, query} = this.props;
    fetchPopularSongs();
    fetchSearchSongs(query);
  }

  render() {
    const {songsFound, popularSongs, query} = this.props;

    if (!songsFound) {
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
            <Header>Search results for: "{query}"</Header>
            <GenreSongsList songs={songsFound}/>
          </Grid.Column>
          <Grid.Column width={6}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

Search.defaultProps = {
  query: null,
  songsFound: null,
  popularSongs: []
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  songsFound: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  popularSongs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchPopularSongs: PropTypes.func.isRequired,
  fetchSearchSongs: PropTypes.func.isRequired
};

export default Search;