import React from 'react';
import PropTypes from 'prop-types';
import {Input, Form, TextArea} from 'semantic-ui-react';

const UploadSongForm =
  ({
     handleChange,
     data
   }) => (
    <Form>
      <Form.Group>
        <Form.Field name='title' value={data.title} control={Input} onChange={handleChange} label='Title' placeholder='Title'/>
        <Form.Field name='description' value={data.description} control={TextArea} onChange={handleChange} label='Description'/>
        <Form.Field name='genre' value={data.genre} control={Input} onChange={handleChange} label='Genre' placeholder='Genre'/>
        <Form.Field name='pictureUrl' value={data.pictureUrl} control={Input} onChange={handleChange} label='Picture URL' placeholder='Picture URL'/>
      </Form.Group>
    </Form>
  );

UploadSongForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired
};

export default UploadSongForm;
