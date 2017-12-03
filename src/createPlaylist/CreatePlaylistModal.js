import React, {Component} from 'react';
import {Button, Modal, Transition} from 'semantic-ui-react';

import MainButton from '../common/MainButton';
import {addPlaylist} from '../actions/PlaylistActions';
import AddPlaylistForm from './CreatePlaylistForm';

class AddPlaylistModal extends Component {
  initialData = {
    name: '',
    is: '',
    description: ''
  };
  state = {
    open: false,
    data: {...this.initialData}
  };
  show = dimmer => () => this.setState({dimmer, open: true});
  close = () => this.setState({open: false});
  submit = async () => {
    const {initialData} = this;
    const {data} = this.state;
    console.log(data);
    const result = await addPlaylist(data)();
    if (result) {
      console.log('Playlist added successfully');
    }

    this.setState({open: false, data: {...initialData}});
  };

  handleChange = (e, {name, value}) => {
    const data = this.state.data;
    data[name] = value;
    this.setState({data});
  };

  render() {
    const {open, dimmer, data} = this.state;

    return (
      <div>
        <div onClick={this.show(false)}>Create new playlist</div>
        <Transition animation='pulse' duration={500}>
          <Modal size='tiny' dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header>Add to playlist</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <AddPlaylistForm
                  handleNameChange={this.handleNameChange}
                  handleDescriptionChange={this.handleDescriptionChange}
                  handleChange={this.handleChange}
                  data={data}
                />
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <MainButton onClick={this.submit}>
                Submit
              </MainButton>
              <Button color='black' onClick={this.close}>
                Cancel
              </Button>
            </Modal.Actions>
          </Modal>
        </Transition>
      </div>
    );
  }
}

export default AddPlaylistModal;