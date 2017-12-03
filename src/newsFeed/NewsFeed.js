import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
} from 'semantic-ui-react';

import * as styles from '../styles';
import * as paths from '../constants/RouterConstants';
import EventsList from './EventsList';
import SongList from '../common/SongList';

const style = {
  backgroundColor: styles.secondaryBackground
};

class NewsFeed extends Component {
  componentDidMount() {
    const {fetchPopularSongs, fetchLastWeekEvents} = this.props;

    fetchLastWeekEvents();
    fetchPopularSongs();
  }

  render() {
    const {events, popularSongs} = this.props;
    const songUrls = popularSongs.map(s => paths.SONG_PATH.replace(':id', s.id));

    return (
      <Grid celled style={{marginTop: '5em', marginBottom: '10em'}}>
        <Grid.Row>
          <Grid.Column width={4}>
            <SongList
              title='Popular'
              songs={popularSongs}
              songUrls={songUrls}
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
  popularSongs: [],
  events: []
};

NewsFeed.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  popularSongs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchPopularSongs: PropTypes.func.isRequired,
  fetchLastWeekEvents: PropTypes.func.isRequired
};

export default NewsFeed;