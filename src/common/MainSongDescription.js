import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment
} from 'semantic-ui-react';
import moment from 'moment';

import * as styles from '../styles';

const style = {
  backgroundColor: styles.secondaryBackground
};

const MainSongDescription = ({song}) => song ? (
  <Segment style={style}>
    <h3>{moment(song.uploadDate).format('MMM Do YYYY')}</h3>
    <p>{song.description}</p>
  </Segment>
) : null;

MainSongDescription.propTypes = {
  song: PropTypes.shape({
    uploadDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default MainSongDescription;