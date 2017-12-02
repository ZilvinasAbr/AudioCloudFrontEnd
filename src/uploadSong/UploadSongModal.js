import React, {Component} from 'react';
import {Button, Modal} from 'semantic-ui-react';

import * as api from '../apiService';
import {UPLOAD_FILE_URL} from '../constants/ApiConstants';

import {uploadSong} from '../actions/SongActions';
import UploadSongForm from './UploadSongForm';

class UploadSongModal extends Component {
  initialData = {
    title: '',
    description: '',
    pictureUrl: '',
    filePath: '',
    genre: '',
    imageFile: null,
    songFile: null
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

  handleImageChange = e => {
    const files = e.target.files;

    this.setState({imageFile: files[0]});

    api.postFile(UPLOAD_FILE_URL, {file: files[0], authorized: true});
  };

  render() {
    const {open, dimmer, data} = this.state;

    return (
      <div>
        <div onClick={this.show(false)}>Upload Song</div>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Upload Song</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <UploadSongForm
                handleChange={this.handleChange}
                handleImageChange={this.handleImageChange}
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