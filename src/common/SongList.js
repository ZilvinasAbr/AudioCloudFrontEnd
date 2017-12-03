import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Segment
} from 'semantic-ui-react';
import BlackLink from '../common/BlackLink';

import * as styles from '../styles';

const heightWithTitle = '558px';
const heightWithoutTitle = '572px';

const style = {
  backgroundColor: styles.secondaryBackground
};

const SongList = ({title, songs, songUrls}) => (
  <Segment style={style}>
    {
      title ? <Segment textAlign='center' style={style}>
        <h3>{title}</h3>
      </Segment> : null
    }
    <Segment style={{
      height: title ? heightWithTitle : heightWithoutTitle,
      overflow: 'auto',
      backgroundColor: styles.secondaryBackground
    }}>
      <Item.Group divided>
        {songs.map((song, i) => (
          <Item key={i} style={style}>
              <Item.Image size='tiny' src={song.pictureUrl || 'http://via.placeholder.com/1024x1024'}/>
            <Item.Content>
              <Item.Header><BlackLink to={songUrls[i]}>{song.title}</BlackLink></Item.Header>
              <Item.Description>
                {song && song.user && song.user.name}
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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    pictureUrl: PropTypes.string.isRequired
  })),
  songUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SongList;