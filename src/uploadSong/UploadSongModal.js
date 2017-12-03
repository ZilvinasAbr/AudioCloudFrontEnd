import React, {Component} from 'react';
import {Button, Modal} from 'semantic-ui-react';

import * as api from '../apiService';
import {UPLOAD_FILE_URL, GENRES_URL} from '../constants/ApiConstants';
import * as styles from '../styles';

import {uploadSong} from '../actions/SongActions';
import UploadSongForm from './UploadSongForm';

const mainButtonStyle = {
  'backgroundColor': styles.mainColor
};

const modalStyle = {
  'backgroundColor': `${styles.mainColor}`
};

class UploadSongModal extends Component {
  async componentDidMount() {
    const response = await api.get(GENRES_URL);
    const genres = await response.json();
    this.setState({data: {genres}});
  }

  initialData = {
    title: '',
    description: '',
    pictureUrl: '',
    filePath: '',
    genre: '',
    genres: [],
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

    try {
      const response = await api.postFile(UPLOAD_FILE_URL, {file: data.songFile, authorized: true});
      const songUrl = await response.text();

      const newSong = {
        title: data.title,
        description: data.description,
        pictureUrl: 'http://via.placeholder.com/1024x1024',
        filePath: songUrl,
        genre: data.genre
      };

      const result = await uploadSong(newSong)();
    } catch (err) {
      console.error(err);
    }

    this.setState({open: false, data: {...initialData}});
  };

  handleChange = (e, {name, value}) => {
    const data = this.state.data;
    data[name] = value;
    this.setState({data});
  };

  handleGenreChange = (e, {value}) => {
    const data = this.state.data;
    data.genre = value;
    this.setState({data});
  };

  handleSongChange = e => {
    const files = e.target.files;

    const data = this.state.data;
    data.songFile = files[0];
    this.setState({data});
  };

  render() {
    const {open, dimmer, data} = this.state;

    return (
      <div>
        <div onClick={this.show(false)}>Upload Song</div>
        <Modal dimmer={dimmer} open={open} onClose={this.close} style={modalStyle}>
          <Modal.Header>Upload Song</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <UploadSongForm
                handleChange={this.handleChange}
                handleSongChange={this.handleSongChange}
                handleGenreChange={this.handleGenreChange}
                data={data}
              />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button style={mainButtonStyle} onClick={this.submit}>
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