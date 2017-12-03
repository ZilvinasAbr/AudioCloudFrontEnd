import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Feed,
  Image,
  Item
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import moment from 'moment';

import * as paths from '../constants/RouterConstants';

const GenreSongsList = ({songs}) => (
  <Container>
    <Feed>
      {songs.map((song, i) => (
        <Feed.Event key={i}>
          <Feed.Label>
            <Image src={song.user.profilePictureUrl || 'http://via.placeholder.com/1024x1024'}/>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{song.user.name}</Feed.User>
              <Feed.Date>{moment(song.uploadDate).format('MMM Do YYYY')}</Feed.Date>
            </Feed.Summary>
            <Feed.Extra>
              <Item.Group divided>
                <Item key={i}>
                  <Item.Image size='small' src={song.pictureUrl || 'http://via.placeholder.com/1024x1024'}/>
                  <Item.Content>
                    <Item.Header><Link to={paths.SONG_PATH.replace(':id', song.id)}>{song.title}</Link></Item.Header>
                    <Item.Description>
                      <p>{song.plays} Plays {song.likes} Likes</p>
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      ))}
    </Feed>
  </Container>
);

GenreSongsList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({}).isRequired,
    uploadDate: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    plays: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })).isRequired
};

export default GenreSongsList;