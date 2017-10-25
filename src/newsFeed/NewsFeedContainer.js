import React from 'react';
import { connect } from 'react-redux';

import NewsFeed from './NewsFeed';

import {fetchPopularSongs} from '../actions/SongActions';
import {fetchLastWeekEvents} from '../actions/EventActions';
import {getPopularSongs} from '../selectors/SongSelectors';
import {getLastWeekEvents} from '../selectors/EventSelectors';

const NewsFeedContainer = props => <NewsFeed {...props} />;

const mapStateToProps = (state) => ({
  popularSongs: getPopularSongs(state),
  events: getLastWeekEvents(state)
});

export default connect(mapStateToProps, {
  fetchPopularSongs,
  fetchLastWeekEvents
})(NewsFeedContainer);
