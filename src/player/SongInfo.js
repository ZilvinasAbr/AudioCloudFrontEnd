import React from 'react';
import PropTypes from 'prop-types';
import {
  Item
} from 'semantic-ui-react';

const SongInfo = ({title, pictureUrl, uploaderName, isLiked}) => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src={pictureUrl}/>
      <Item.Content>
        <Item.Header>{title}</Item.Header>
        <Item.Description>
          {uploaderName}
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);

SongInfo.propTypes = {
  title: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  uploaderName: PropTypes.string.isRequired
};

export default SongInfo;
