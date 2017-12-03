import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Item,
  Segment,
  Feed
} from 'semantic-ui-react';
import moment from 'moment';
import BlackLink from '../common/BlackLink';

import * as paths from '../constants/RouterConstants';
import * as styles from '../styles';

const EventsList = ({events}) => (
  <Segment style={{backgroundColor: styles.secondaryBackground, height: '655px', overflow: 'auto'}}>
    <Feed>
      {events.map((event, i) => (
        <Feed.Event key={i}>
          <Feed.Label>
            <Image src='/image.png'/>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{event.user.name}</Feed.User> {event.eventType}
              <Feed.Date>{moment(event.createdOn).format('MMM Do YYYY')}</Feed.Date>
            </Feed.Summary>
            <Feed.Extra>
              <Item.Group divided>
                <Item key={i}>
                  <Item.Image size='small' src={event.song.pictureUrl}/>
                  <Item.Content>
                    <Item.Header>
                      <BlackLink to={paths.SONG_PATH.replace(':id', event.song.id)}>{event.song.title}</BlackLink>
                    </Item.Header>
                    <Item.Description>
                      <p>{event.song.plays} Plays {event.song.likes} Likes</p>
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      ))}
    </Feed>
  </Segment>
);

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    eventType: PropTypes.string.isRequired,
    createdOn: PropTypes.string.isRequired,
    song: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      pictureUrl: PropTypes.string.isRequired,
      plays: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  })).isRequired
};

export default EventsList;