import React from 'react';
import { Toaster } from 'react-hot-toast';

import Container from '@material-ui/core/Container';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@material-ui/core/Button';
import FormControl from '@mui/material/FormControl';

export const Stepfour = ({
  formData,
  setForm,
  navigation,
  handleSubmit,
  course,
  handleChangeInput,
}) => {
  // const { learn, desc } = formData;

  return (
    <Container maxWidth='xs'>
      <Toaster position='top-center' reverseOrder={false} />
      <h3 className='mb-3 create-header'>Add Course Description</h3>
      <p className='create-para'>Step 4 of 4</p>

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth style={{ margin: '0.7rem 0 0.3rem 0' }}>
          <textarea
            className='form-control'
            placeholder='What you"ll Learn'
            name='learn'
            value={course.learn}
            onChange={handleChangeInput}
          ></textarea>
        </FormControl>

        <FormControl fullWidth style={{ margin: '0.7rem 0 0.3rem 0' }}>
          <textarea
            className='form-control'
            placeholder='Course Description'
            name='desc'
            value={course.desc}
            onChange={handleChangeInput}
          ></textarea>
        </FormControl>

        <div
          className='d-flex justify-content-between'
          style={{ marginTop: '1rem' }}
        >
          <Button
            color='secondary'
            variant='contained'
            style={{ padding: '0.7rem 2rem' }}
            onClick={() => navigation.previous()}
          >
            Back
          </Button>
          <Button
            style={{ padding: '0.7rem 2rem' }}
            color='primary'
            variant='contained'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

<TextareaAutosize
  aria-label='minimum height'
  minRows={3}
  placeholder='Minimum 3 rows'
  style={{ width: 200 }}
/>;
