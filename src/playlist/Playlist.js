import React from 'react';
import {
  Grid
} from 'semantic-ui-react';

import MainSong from '../common/MainSong';
import MainSongDescription from '../common/MainSongDescription';
import SongList from '../common/SongList';
import mockSongs from '../mockData/mockSongs';

const Playlist = () => (
  <Grid celled style={{ marginTop: '5em', marginBottom: '10em' }}>
    <Grid.Row>
      <Grid.Column width={4}>
        <SongList
          title='Playlist'
          songs={mockSongs}
        />
      </Grid.Column>
      <Grid.Column width={6} textAlign='center'>
        <MainSong
          title={mockSongs[0].title}
          pictureUrl={mockSongs[0].pictureUrl}
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
);

export default Playlist;
