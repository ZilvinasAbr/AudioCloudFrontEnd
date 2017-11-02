import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Header, Image, Segment} from 'semantic-ui-react';

class Playlists extends Component {
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
    const {playlists} = this.props;

    if (!playlists) {
      return <div>Loading...</div>;
    }

    return (
      <Segment>
        <Header as='h2'>Playlists</Header>
        <Segment.Group horizontal>
          {
            playlists.map((playlist, i) => (
              <Segment key={i}>
                <Image size='tiny' src={playlist.songs[0].pictureUrl}/>
                <Header as='h5'>{playlist.name}</Header>
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

Playlists.defaultProps = {
  playlists: null
};

Playlists.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape({})),
  onShowAll: PropTypes.func.isRequired
};

export default Playlists;