import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  Image,
  Segment
} from 'semantic-ui-react';

import * as styles from '../styles';
import AddToPlaylistPopup from '../createPlaylist/AddToPlaylistPopup';

const style = {
  backgroundColor: styles.secondaryBackground
};

const secondaryButton = {
  backgroundColor: styles.menuButtonColor
};

const MainSong = ({id, title, pictureUrl, likes, plays, playSong}) => (
  <div style={style}>
    <Segment style={style}>
      <Image src={pictureUrl || 'http://via.placeholder.com/1024x1024'} size='large' centered/>
    </Segment>
    <Segment.Group>
      <Segment style={style}>
        <h2>{title}</h2>
        <Button style={secondaryButton}  icon onClick={() => {}}>
          <Icon name='heart' />
        </Button>
        <AddToPlaylistPopup
          songId={id}
        />
        <Button style={secondaryButton} onClick={() => playSong(id)}>Play</Button>
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
  playSong: PropTypes.func.isRequired
};

export default MainSong;