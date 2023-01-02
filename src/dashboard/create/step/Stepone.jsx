import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export const Stepone = ({
  formData,
  setForm,
  navigation,
  course,
  handleChangeInput,
}) => {
  // const { course_id, title, level } = formData;
  return (
    <Container maxWidth='xs'>
      <h3 className='mb-3 create-header'>Create New Course</h3>
      <p>Step 1 of 4</p>

      {/* <div className='form-group mb-2'>
        <label htmlFor='fullname' className='form-label'>
          Course ID
        </label>
        <input
          type='text'
          className='form-control'
          id='course_id'
          name='course_id'
          value={course.course_id}
          onChange={handleChangeInput}
          placeholder='Enter number from 1 - infinity'
        />
      </div> */}

      <div className='form-group mb-2 mb-2'>
        <label htmlFor='fullname' className='form-label'>
          Course Author
        </label>
        <input
          type='text'
          className='form-control'
          id='author'
          name='author'
          value={course.author}
          onChange={handleChangeInput}
          placeholder='Enter course author'
        />
      </div>

      <div className='form-group mb-2'>
        <label htmlFor='fullname' className='form-label'>
          Course Title
        </label>
        <input
          type='text'
          className='form-control'
          id='title'
          name='title'
          min='50'
          value={course.title}
          onChange={handleChangeInput}
          placeholder='Enter course title'
        />
      </div>

      <div className='form-group mb-2'>
        <label htmlFor='level' className='form-label'>
          Course Level
        </label>
        <select
          id='level'
          className='form-select'
          name='level'
          value={course.level}
          onChange={handleChangeInput}
        >
          <option defaultValue>Choose course level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Experts</option>
          <option>All Levels</option>
        </select>
      </div>

      <Button
        variant='contained'
        fullWidth
        color='primary'
        style={{ marginTop: '1rem', padding: '0.8rem 2rem' }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};
