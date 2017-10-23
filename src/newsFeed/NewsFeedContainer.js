import React from 'react';
import { connect } from 'react-redux';

import NewsFeed from './NewsFeed';

import {fetchTrendingSongs} from '../actions/SongActions';
import {fetchLastWeekEvents} from '../actions/EventActions';
import {getTrendingSongs} from '../selectors/SongSelectors';
import {getLastWeekEvents} from '../selectors/EventSelectors';

const NewsFeedContainer = props => <NewsFeed {...props} />;

const mapStateToProps = (state) => ({
  trendingSongs: getTrendingSongs(state),
  events: getLastWeekEvents(state)
});

export default connect(mapStateToProps, {
  fetchTrendingSongs,
  fetchLastWeekEvents
})(NewsFeedContainer);
