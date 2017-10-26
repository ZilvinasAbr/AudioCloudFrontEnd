import React from 'react';
import {
  Grid,
  Menu
} from 'semantic-ui-react';

import SongInfo from './SongInfo';
import MusicPlayer from './MusicPlayer';
import mockSongs from '../mockData/mockSongs';

const Footer = () => (
  <Menu fixed='bottom'>
    <Grid celled='internally'>
      <Grid.Row>
        <Grid.Column width={4}>
          <SongInfo
            title={mockSongs[0].title}
            uploaderName={mockSongs[0].user.name}
            pictureUrl={mockSongs[0].pictureUrl}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <MusicPlayer/>
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Menu>
);

export default Footer;
