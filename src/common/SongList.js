import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Segment
} from 'semantic-ui-react';

const heightWithTitle = '558px';
const heightWithoutTitle = '572px';

const SongList = ({title, songs}) => (
  <Segment>
    {
      title ? <Segment textAlign='center'>
        <h3>{title}</h3>
      </Segment> : null
    }
    <Segment style={{height: title ? heightWithTitle : heightWithoutTitle, overflow: 'auto'}}>
      <Item.Group divided>
        {songs.map((song, i) => (
          <Item key={i}>
            <Item.Image size='tiny' src={song.pictureUrl}/>
            <Item.Content>
              <Item.Header>{song.title}</Item.Header>
              <Item.Description>
                {song.user.name}
              </Item.Description>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  </Segment>
);

SongList.propTypes = {
  title: PropTypes.string,
  songs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    pictureUrl: PropTypes.string.isRequired
  }))
};

export default SongList;