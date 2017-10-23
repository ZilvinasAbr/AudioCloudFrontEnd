import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
} from 'semantic-ui-react';

import EventsList from './EventsList';
import SongList from '../common/SongList';

class NewsFeed extends Component {
  componentDidMount() {
    const {fetchTrendingSongs, fetchLastWeekEvents} = this.props;

    fetchLastWeekEvents();
    fetchTrendingSongs();
  }

  render() {
    const {events, trendingSongs} = this.props;

    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>
            <SongList
              title='Trending'
              songs={trendingSongs}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <EventsList events={events}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

NewsFeed.defaultProps = {
  trendingSongs: [],
  events: []
};

NewsFeed.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  trendingSongs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchTrendingSongs: PropTypes.func.isRequired,
  fetchLastWeekEvents: PropTypes.func.isRequired
};

export default NewsFeed;