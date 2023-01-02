import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export const Steptwo = ({
  formData,
  setForm,
  navigation,
  categories,
  course,
  handleChangeInput,
}) => {
  // const { author, category, topic, comments } = formData;
  return (
    <Container maxWidth='xs'>
      <h3 className='mb-3 create-header'>Add More Details</h3>
      <p>Step 2 of 4</p>

      {/* <div className='form-group mb-2 mb-2'>
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
      </div> */}

      <div className='form-group mb-2'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select
          id='category'
          className='form-select'
          name='category'
          value={course.category}
          onChange={handleChangeInput}
        >
          <option value=''>Please select a category</option>
          {categories.map((category) => {
            return (
              <option value={category._id} key={category._id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className='form-group mb-2'>
        <label htmlFor='topic' className='form-label'>
          Topic
        </label>
        <select
          id='topic'
          className='form-select'
          name='topic'
          value={course.topic}
          onChange={handleChangeInput}
        >
          <option defaultValue>Select topic</option>
          <option>HTML</option>
          <option>Css</option>
          <option>Javascript</option>
          <option>React</option>
          <option>Design</option>
          <option>Vue</option>
          <option>PHP</option>
          <option>Python</option>
          <option>Nodejs</option>
          <option>Laravel</option>
          <option>Git Flow</option>
        </select>
      </div>

      <div className='form-group mb-2'>
        <label htmlFor='message' className='form-label'>
          Comments
        </label>
        <textarea
          className='form-control'
          placeholder='Course Comments'
          id='comments'
          name='comments'
          value={course.comments}
          onChange={handleChangeInput}
        ></textarea>
      </div>

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
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
