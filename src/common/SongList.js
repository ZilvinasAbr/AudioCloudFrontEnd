import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Segment
} from 'semantic-ui-react';

const SongList = ({title, songs}) => (
  <Segment>
    <Segment textAlign='center'>
      <h3>{title}</h3>
    </Segment>
    <Segment style={{height: '558px', overflow: 'auto'}}>
      <Item.Group divided>
        {songs.map((song, i) => (
          <Item key={i}>
            <Item.Image size='tiny' src={song.imageUrl}/>
            <Item.Content>
              <Item.Header>{song.title}</Item.Header>
              <Item.Description>
                {song.uploaderName}
              </Item.Description>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  </Segment>
);

SongList.propTypes = {
  title: PropTypes.string.isRequired,
  songs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    uploaderName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  }))
};

export default SongList;