import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Segment
} from 'semantic-ui-react';

const MainSong = ({title, pictureUrl, likes, plays}) => (
  <div>
    <Segment>
      <Image src={pictureUrl} size='large' centered/>
    </Segment>
    <Segment.Group>
      <Segment>
        <h2>{title}</h2>
      </Segment>
      <Segment.Group horizontal>
        <Segment>{plays} Plays</Segment>
        <Segment>{likes} Likes</Segment>
      </Segment.Group>
    </Segment.Group>
  </div>
);

MainSong.propTypes = {
  title: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  plays: PropTypes.number.isRequired
};

export default MainSong;