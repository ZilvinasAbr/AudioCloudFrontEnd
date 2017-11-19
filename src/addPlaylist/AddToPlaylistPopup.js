import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Checkbox, Button, Grid, Header, List, Popup} from 'semantic-ui-react';

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

  componentWillReceiveProps(nextProps) {
    const {playlists, songId} = this.props;
    if (!playlists && nextProps.playlists) {
      // this.setState({
      //   checkboxes: nextProps.playlists.filter(playlist => playlist.songs.find(s => s.id === songId))
      // });
    }
  }

  handleOpen = () => this.setState({isOpen: true});
  handleClose = () => this.setState({isOpen: false});

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
        <Button>Create new</Button>
        <List>
          {playlists && playlists.map((playlist, i) => (
            <List.Item key={i}>
              <Checkbox checked={true} label={playlist.name}/>
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
  fetchUserPlaylists
})(AddToPlaylistPopup);