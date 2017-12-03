import React from 'react';
import PropTypes from 'prop-types';
import {
  Item
} from 'semantic-ui-react';

import * as styles from '../styles';

const style = {
  'backgroundColor': styles.playerBackground
};

const SongInfo = ({title, pictureUrl, uploaderName, isLiked}) => (
  <Item.Group style={style}>
    <Item>
      <Item.Image size='tiny' src={pictureUrl}/>
      <Item.Content>
        <Item.Header style={{color: styles.whiteTextColor}}>{title}</Item.Header>
        <Item.Description style={{color: styles.whiteTextColor}}>
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
