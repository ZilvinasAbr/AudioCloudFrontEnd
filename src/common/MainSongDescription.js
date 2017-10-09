import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment
} from 'semantic-ui-react';

const MainSongDescription = ({createdOn, description}) => (
  <Segment>
    <h3>{createdOn}</h3>
    <p>{description}</p>
  </Segment>
);

MainSongDescription.propTypes = {
  createdOn: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default MainSongDescription;