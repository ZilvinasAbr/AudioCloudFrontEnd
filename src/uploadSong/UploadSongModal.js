import React, {Component} from 'react';
import {Button, Modal} from 'semantic-ui-react';

import {uploadSong} from '../actions/SongActions';
import UploadSongForm from './UploadSongForm';

class UploadSongModal extends Component {
  initialData = {
    title: '',
    description: '',
    pictureUrl: '',
    filePath: '',
    genre: ''
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

    const result = await uploadSong(data)();

    if (result) {
      console.log('Song uploaded successfully');
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
        <div onClick={this.show(false)}>Upload Song</div>
        <Modal size='tiny' dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Upload Song</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <UploadSongForm
                handleChange={this.handleChange}
                data={data}
              />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button positive onClick={this.submit}>
              Submit
            </Button>
            <Button color='black' onClick={this.close}>
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default UploadSongModal;