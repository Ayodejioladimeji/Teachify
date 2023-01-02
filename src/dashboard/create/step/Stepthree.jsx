import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';

export const Stepthree = ({
  formData,
  setForm,
  navigation,
  handleUpload,
  handleDestroy,
  styleUpload,
  images,
  loading,
  course,
  handleChangeInput,
}) => {
  // const { type, link } = formData;
  // console.log(loading);

  return (
    <Container maxWidth='xs'>
      <Toaster position='top-center' reverseOrder={false} />
      <h3 className='mb-3 create-header'>Add images and video links </h3>
      <p className='create-para'>Step 3 of 4</p>

      <div className='form-group mb-2'>
        <label htmlFor='level' className='form-label'>
          Course Type
        </label>
        <select
          id='type'
          className='form-select'
          name='type'
          value={course.type}
          onChange={handleChangeInput}
          required
        >
          <option defaultValue>Choose Type</option>
          <option>New</option>
          <option>Start</option>
          <option>Featured</option>
        </select>
      </div>

      <div className='form-group mb-2'>
        <label htmlFor='level' className='form-label'>
          Upload Thumbnail
        </label>
        <div className='upload'>
          <input type='file' name='file' id='file_up' onChange={handleUpload} />
          {loading ? (
            <div id='file_img'>
              <div className='load'>
                <Loader type='Bars' color='#f16051' height={54} width={54} />
              </div>
            </div>
          ) : (
            <div id='file_img' style={styleUpload}>
              <img src={images ? images.url : ''} alt='' />
              <FaTimesCircle onClick={handleDestroy} className='span' />
            </div>
          )}
        </div>
      </div>

      <div className='form-group mb-2'>
        <label htmlFor='fullname' className='form-label'>
          Course Links
        </label>
        <input
          type='text'
          className='form-control'
          id='link'
          name='link'
          value={course.link}
          onChange={handleChangeInput}
          placeholder='Enter Video link'
        />
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
