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

const MainSongDescription = ({createdOn, description}) => (
  <Segment style={style}>
    <h3>{moment(createdOn).format('MMM Do YYYY')}</h3>
    <p>{description}</p>
  </Segment>
);

MainSongDescription.propTypes = {
  createdOn: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default MainSongDescription;