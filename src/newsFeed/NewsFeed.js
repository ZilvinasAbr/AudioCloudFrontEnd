import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';

import EventsList from './EventsList';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SongList from '../common/SongList';

import mockSongs from '../mockData/mockSongs';
import mockUsers from '../mockData/mockUsers';
import mockEvents from '../mockData/mockEvents';

const NewsFeed = () => (
  <div>
    <Header
      userName={mockUsers[0].userName}
    />
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={4}>
          <SongList
            title='Trending'
            songs={mockSongs}
          />
        </Grid.Column>
        <Grid.Column width={12}>
          <EventsList events={mockEvents}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Footer/>
  </div>
);

export default NewsFeed;