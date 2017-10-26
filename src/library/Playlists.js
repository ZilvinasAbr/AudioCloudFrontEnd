import React from 'react';
import {Button, Header, Image, Segment} from 'semantic-ui-react';

import mockPlaylists from '../mockData/mockPlaylists';

const Playlists = () => (
  <Segment>
    <Header as='h2'>Playlists</Header>
    <Segment.Group horizontal>
      {
        mockPlaylists.map((playlist, i) => (
          <Segment key={i}>
            <Image size='tiny' src={playlist.songs[0].pictureUrl}/>
            <Header as='h5'>{playlist.name}</Header>
          </Segment>
        ))
      }
    </Segment.Group>
    <Button>Show All</Button>
  </Segment>
);

export default Playlists;