import React from 'react';
import {
  Grid
} from 'semantic-ui-react';

import MainSong from '../common/MainSong';
import MainSongDescription from '../common/MainSongDescription';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SongList from '../common/SongList';
import mockSongs from '../mockData/mockSongs';
import mockUsers from '../mockData/mockUsers';

const Playlist = () => (
  <div>
    <Header
      userName={mockUsers[0].userName}
    />
    <Grid celled>
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
    <Footer/>
  </div>
);

export default Playlist;
