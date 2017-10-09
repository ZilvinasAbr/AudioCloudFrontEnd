import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Item,
  Segment,
  Feed
} from 'semantic-ui-react';

const EventsList = ({events}) => (
  <Segment style={{height: '655px', overflow: 'auto'}}>
    <Feed>
      {events.map((event, i) => (
        <Feed.Event>
          <Feed.Label>
            <Image src='/image.png'/>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{event.uploaderName}</Feed.User> {event.eventText}
              <Feed.Date>{event.createdOn}</Feed.Date>
            </Feed.Summary>
            <Feed.Extra>
              <Item.Group divided>
                <Item key={i}>
                  <Item.Image size='small' src={event.songImageUrl}/>
                  <Item.Content>
                    <Item.Header>{event.songTitle}</Item.Header>
                    <Item.Description>
                      <p>{event.uploaderName}</p>
                      <p>{event.plays} Plays {event.likes} Likes</p>
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
    uploaderName: PropTypes.string.isRequired,
    eventText: PropTypes.string.isRequired,
    createdOn: PropTypes.string.isRequired,
    songImageUrl: PropTypes.string.isRequired,
    songTitle: PropTypes.string.isRequired,
    plays: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })).isRequired
};

export default EventsList;