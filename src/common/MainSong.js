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

const MainSong = ({id, title, pictureUrl, likes, plays, playSong, isPlaying}) => (
  <div style={style}>
    <Segment style={style}>
      <Image src={pictureUrl || 'http://via.placeholder.com/1024x1024'} size='large' centered/>
    </Segment>
    <Segment.Group>
      <Segment style={style}>
        <h2>{title}</h2>
        <MainButton icon onClick={() => {
        }}>
          <Icon name='heart'/>
        </MainButton>
        <AddToPlaylistPopup
          songId={id}
        />
        <MainButton icon={getIcon(isPlaying)} onClick={() => playSong(id)}/>
      </Segment>
      <Segment.Group horizontal>
        <Segment>{plays} Plays</Segment>
        <Segment>{likes} Likes</Segment>
      </Segment.Group>
    </Segment.Group>
  </div>
);

MainSong.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  plays: PropTypes.number.isRequired,
  playSong: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default MainSong;