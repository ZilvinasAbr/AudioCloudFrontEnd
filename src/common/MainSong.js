import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Image,
  Segment
} from 'semantic-ui-react';

const MainSong = ({id, title, pictureUrl, likes, plays, playSong}) => (
  <div>
    <Segment>
      <Image src={pictureUrl} size='large' centered/>
    </Segment>
    <Segment.Group>
      <Segment>
        <h2>{title}</h2>
        <Button onClick={() => playSong(id)}>Play</Button>
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