import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input, Form, Radio, TextArea} from 'semantic-ui-react';

const AddPlaylistForm =
  ({
     handleChange,
     data
   }) => (
    <Form>
      <Form.Group>
        <Form.Field name='name' value={data.name} control={Input} onChange={handleChange} label='Name' placeholder='Name'/>
      </Form.Group>
      <Form.Group inline>
        <label>Is</label>
        <Form.Field name='is' control={Radio} label='Public' value='public' checked={data.is === 'public'} onChange={handleChange}/>
        <Form.Field name='is' control={Radio} label='Private' value='private' checked={data.is === 'private'} onChange={handleChange}/>
      </Form.Group>
      <Form.Field name='description' value={data.description} control={TextArea} onChange={handleChange} label='Description'/>
    </Form>
  );

AddPlaylistForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired
};

export default AddPlaylistForm;
