import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Image,
  Segment
} from 'semantic-ui-react';

import MainButton from '../common/MainButton';
import * as styles from '../styles';
import AddToPlaylistPopup from '../createPlaylist/AddToPlaylistPopup';

const style = {
  backgroundColor: styles.secondaryBackground
};

const getIcon = isPlaying => isPlaying ? 'pause' : 'play';

const MainSong = ({song, playSong, isPlaying}) => song ? (
  <div style={style}>
    <Segment style={style}>
      <Image src={song.pictureUrl || 'http://via.placeholder.com/1024x1024'} size='large' centered/>
    </Segment>
    <Segment.Group>
      <Segment style={style}>
        <h2>{song.title}</h2>
        <MainButton icon onClick={() => {
        }}>
          <Icon name='heart'/>
        </MainButton>
        <AddToPlaylistPopup
          songId={song.id}
        />
        <MainButton icon={getIcon(isPlaying)} onClick={() => playSong(song.id)}/>
      </Segment>
      <Segment.Group horizontal>
        <Segment>{song.plays} Plays</Segment>
        <Segment>{song.likes} Likes</Segment>
      </Segment.Group>
    </Segment.Group>
  </div>
) : (
  <div style={style}>
    <Segment style={style}>
      <Image src='http://via.placeholder.com/1024x1024' size='large' centered/>
    </Segment>
    <Segment.Group>
      <Segment style={style}>
        <h2>Playlist has no songs</h2>
      </Segment>
      <Segment.Group horizontal>
        <Segment></Segment>
        <Segment></Segment>
      </Segment.Group>
    </Segment.Group>
  </div>
);

MainSong.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    plays: PropTypes.number.isRequired
  }),
  playSong: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default MainSong;