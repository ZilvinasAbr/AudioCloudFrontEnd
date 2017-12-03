import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BlackLink from '../common/BlackLink';
import {Button, Header, Image, Loader, Segment} from 'semantic-ui-react';

import * as paths from '../constants/RouterConstants';
// import * as styles from '../styles';

class Uploaded extends Component {
  state = {
    isShowingAll: false
  };

  handleShowAll = () => {
    const {onShowAll} = this.props;
    onShowAll();
    this.setState({isShowingAll: true})
  };

  render() {
    const {isShowingAll} = this.state;
    const {songs} = this.props;

    if (!songs) {
      return <Loader active/>;
    }

    return (
      <Segment>
        <Header as='h2'>Songs Uploaded</Header>
        <Segment.Group horizontal>
          {
            songs.map((song, i) => (
              <Segment key={i}>
                <Image size='tiny' src={song.pictureUrl || 'http://via.placeholder.com/1024x1024'}/>
                <Header as='h5'>
                  <BlackLink
                    to={paths.SONG_PATH.replace(':id', song.id)}
                  >
                    {song.title}
                  </BlackLink>
                </Header>
              </Segment>
            ))
          }
        </Segment.Group>
        <div>
          {isShowingAll || <Button onClick={this.handleShowAll}>Show All</Button>}
        </div>
      </Segment>
    )
  }
}

Uploaded.defaultProps = {
  songs: null
};

Uploaded.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({})),
  onShowAll: PropTypes.func.isRequired
};

export default Uploaded;