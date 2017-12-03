import React from 'react';
import PropTypes from 'prop-types';
import {
  Responsive
} from 'semantic-ui-react';

import PlayerDesktop from './PlayerDesktop';
import PlayerMobile from './PlayerMobile';

const Player = (props) => (
  <div>
    <Responsive maxWidth={764}>
      <PlayerMobile {...props}/>
    </Responsive>
    <Responsive minWidth={765}>
      <PlayerDesktop {...props}/>
    </Responsive>
  </div>
);

export default Player;
