import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Feed,
  Image,
  Item
} from 'semantic-ui-react';

const GenreSongsList = ({songs}) => (
  <Container>
    <Feed>
      {songs.map((song, i) => (
        <Feed.Event key={i}>
          <Feed.Label>
            <Image src='/image.png'/>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{song.uploaderName}</Feed.User>
              <Feed.Date>{song.createdOn}</Feed.Date>
            </Feed.Summary>
            <Feed.Extra>
              <Item.Group divided>
                <Item key={i}>
                  <Item.Image size='small' src={song.imageUrl}/>
                  <Item.Content>
                    <Item.Header>{song.title}</Item.Header>
                    <Item.Description>
                      <p>{song.uploaderName}</p>
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
    uploaderName: PropTypes.string.isRequired,
    createdOn: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    plays: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })).isRequired
};

export default GenreSongsList;