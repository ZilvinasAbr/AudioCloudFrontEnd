import React from 'react';
import {connect} from 'react-redux';

import Player from './Player';
import {getCurrentSong} from "../selectors/PlayerSelectors";

const PlayerContainer = props => <Player {...props} />;

const mapStateToProps = (state) => ({
  currentSong: getCurrentSong(state)
});

export default connect(mapStateToProps, {

})(PlayerContainer);