import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Checkbox, Button, Header, List, Popup} from 'semantic-ui-react';

import {
  addSongToPlaylist,
  removeSongFromPlaylist
} from '../actions/PlaylistActions';
import {fetchUserPlaylists} from '../actions/LibraryActions';
import {getUserPlaylists} from '../selectors/LibrarySelectors';
import {getCurrentUser} from '../selectors/UserSelectors';

class AddToPlaylistPopup extends Component {
  state = {
    isOpen: false,
    checkboxes: null
  };

  componentDidMount() {
    const {currentUser: {name}, fetchUserPlaylists} = this.props;

    fetchUserPlaylists(name);
  }

  getIsChecked = playlist => !!playlist.songs.find(s => s.id === this.props.songId);

  handleOpen = () => this.setState({isOpen: true});
  handleClose = () => this.setState({isOpen: false});
  handleChange = (e, {checked}, i) => {
    const {
      playlists, addSongToPlaylist, removeSongFromPlaylist, songId
    } = this.props;

    if (checked) {
      addSongToPlaylist(playlists[i].id, songId);
    } else {
      removeSongFromPlaylist(playlists[i].id, songId);
    }
  };

  render() {
    const {playlists} = this.props;

    return (
      <Popup
        trigger={<Button icon='add'/>}
        on='click'
        open={this.state.isOpen}
        onClose={this.handleClose}
        onOpen={this.handleOpen}
        position='top right'
      >
        <Header as='h2'>Add to playlist</Header>
        <List>
          {playlists && playlists.map((playlist, i) => (
            <List.Item key={i}>
              <Checkbox
                onChange={(e, data) => this.handleChange(e, data, i)}
                checked={this.getIsChecked(playlist)}
                label={playlist.name}
              />
            </List.Item>
          ))}
        </List>
      </Popup>
    )
  }
}

AddToPlaylistPopup.propTypes = {
  songId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
  playlists: getUserPlaylists(state)
});

export default connect(mapStateToProps, {
  fetchUserPlaylists,
  addSongToPlaylist,
  removeSongFromPlaylist
})(AddToPlaylistPopup);