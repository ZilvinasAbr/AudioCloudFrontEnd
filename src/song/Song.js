import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Grid
} from 'semantic-ui-react';

import MainSong from '../common/MainSong';
import MainSongDescription from '../common/MainSongDescription';
import SongList from '../common/SongList';

import mockSongs from '../mockData/mockSongs';

class Song extends Component {
  componentWillMount() {
    const {fetchSong, id} = this.props;

    fetchSong(id);
  }

  componentWillReceiveProps(nextProps) {
    const {fetchSong, id} = this.props;
    if (nextProps.id !== id) {
      fetchSong(id);
    }
  }

  render() {
    const {id, song} = this.props;

    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>
            <SongList
              title='Suggestions'
              songs={mockSongs}
            />
          </Grid.Column>
          <Grid.Column width={6} textAlign='center'>
            <MainSong
              title={song.title}
              imageUrl={mockSongs[0].imageUrl}
              likes={mockSongs[0].likes}
              plays={mockSongs[0].plays}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <MainSongDescription
              createdOn={mockSongs[0].createdOn}
              description={mockSongs[0].description}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

Song.propTypes = {
  id: PropTypes.number.isRequired,
  fetchSong: PropTypes.func.isRequired,
  song: PropTypes.shape({})
};

export default Song;