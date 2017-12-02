import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Input, Form, TextArea} from 'semantic-ui-react';

const getOptions = genres => genres.map(genre => ({
  key: genre,
  text: genre,
  value: genre
}));

const UploadSongForm =
  ({
     handleChange,
     handleSongChange,
     handleGenreChange,
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
            <Form.Select
              label='Genre'
              options={getOptions(data.genres)}
              placeholder='Select genre'
              onChange={handleGenreChange}
              value={data.genre}
            />
            <Form.Field name='pictureUrl' value={data.pictureUrl} control={Input} onChange={handleChange}
                        label='Picture URL' placeholder='Picture URL'/>
            <Form.Field>
              <label>Song file</label>
              <input name='songUrl' type='file' onChange={handleSongChange}/>
            </Form.Field>
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
