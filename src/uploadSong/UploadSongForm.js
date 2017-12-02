import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Input, Form, TextArea} from 'semantic-ui-react';

const UploadSongForm =
  ({
     handleChange,
     handleImageChange,
     data
   }) => (
    <Form>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Form.Field name='title' value={data.title} control={Input} onChange={handleChange} label='Title'
                        placeholder='Title'/>
            <Form.Field name='description' value={data.description} control={TextArea} onChange={handleChange}
                        label='Description'/>
          </Grid.Column>
          <Grid.Column>
            <Form.Field name='genre' value={data.genre} control={Input} onChange={handleChange} label='Genre'
                        placeholder='Genre'/>
            <Form.Field name='pictureUrl' value={data.pictureUrl} control={Input} onChange={handleChange}
                        label='Picture URL' placeholder='Picture URL'/>
            <input name='pictureUrl' type='file' onChange={handleImageChange}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );

UploadSongForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired
};

export default UploadSongForm;
