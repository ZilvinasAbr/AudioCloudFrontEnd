import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button, Header, Image, Loader, Segment} from 'semantic-ui-react';

import * as paths from '../constants/RouterConstants';

class Likes extends Component {
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
    const {likedPlaylist} = this.props;

    if (!likedPlaylist) {
      return <Loader active inline/>;
    }

    return (
      <Segment>
        <Header as='h2'>Likes</Header>
        <Segment.Group horizontal>
          {
            likedPlaylist.songs.map((song, i) => (
              <Segment key={i}>
                <Image size='tiny' src={song.pictureUrl}/>
                <Header as='h5'>
                  <Link to={paths.SONG_PATH.replace(':id', song.id)}>{song.title}</Link>
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

Likes.defaultProps = {
  likedPlaylist: null
};

Likes.propTypes = {
  likedPlaylist: PropTypes.shape({
    songs: PropTypes.arrayOf(PropTypes.shape({})).isRequired
  }),
  onShowAll: PropTypes.func.isRequired
};

export default Likes;