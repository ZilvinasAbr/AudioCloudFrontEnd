import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Header, Image, Segment} from 'semantic-ui-react';

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
      return <div>Loading...</div>;
    }

    return (
      <Segment>
        <Header as='h2'>Songs Uploaded</Header>
        <Segment.Group horizontal>
          {
            songs.map((song, i) => (
              <Segment key={i}>
                <Image size='tiny' src={song.pictureUrl}/>
                <Header as='h5'>{song.title}</Header>
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