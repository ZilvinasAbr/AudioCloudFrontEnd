import React from 'react';
import PropTypes from 'prop-types';
import {
  Image
} from 'semantic-ui-react';

import * as styles from '../styles';

const style = {
  'backgroundColor': styles.playerBackground
};

const SongInfo = ({title, pictureUrl, uploaderName}) => (
  <div>
    {title}
      {/*<Item.Image size='tiny' src={pictureUrl || 'http://via.placeholder.com/1024x1024'}/>*/}
      {/*<Item.Content>*/}
        {/*<Item.Header style={{color: styles.whiteTextColor}}>{title}</Item.Header>*/}
        {/*<Item.Description style={{color: styles.whiteTextColor}}>*/}
          {/*{uploaderName}*/}
        {/*</Item.Description>*/}
      {/*</Item.Content>*/}
  </div>
);

SongInfo.propTypes = {
  title: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  uploaderName: PropTypes.string.isRequired
};

export default SongInfo;
