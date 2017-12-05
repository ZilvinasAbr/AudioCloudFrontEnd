import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';

import MainButton from '../common/MainButton';
import {isLiked, likeSong, dislikeSong} from '../actions/LikeActions';

class LikeButton extends Component {
  state = {
    isLiked: false
  };

  async componentDidMount() {
    const {songId} = this.props;
    await this.isLiked(songId);
  }

  async componentWillReceiveProps(nextProps) {
    const {songId} = this.props;
    if (nextProps.songId !== songId) {
      await this.isLiked(nextProps.songId);
    }
  }

  isLiked = async songId => {
    const liked = await isLiked(songId);
    this.setState({isLiked: liked});
  };

  likeASong = async songId => {
    await likeSong(songId);
    this.setState({isLiked: true});
  };

  dislikeASong = async songId => {
    await dislikeSong(songId);
    this.setState({isLiked: false});
  };

  renderDisliked = songId => (
    <MainButton color='black' icon onClick={() => this.likeASong(songId)}>
      <Icon name='heart'/>
    </MainButton>
  );

  renderLiked = songId => (
    <MainButton icon onClick={() => this.dislikeASong(songId)}>
      <Icon name='heart'/>
    </MainButton>
  );

  render() {
    const {isLiked} = this.state;
    const {songId} = this.props;
    return isLiked ? this.renderLiked(songId) : this.renderDisliked(songId);
  }
}

LikeButton.propTypes = {
  songId: PropTypes.number.isRequired
};

export default LikeButton;