import React from 'react';
import './InstructorBoard.css';
import { Toaster } from 'react-hot-toast';

const InstructorBoardTwo = ({ navigation, handleChange, videoPro }) => {
  return (
    <div className='instructor'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='instructor-top mt-3'>
        <p>Step 2 of 3</p>
        <h3>Create a course</h3>
        <p>
          Over the years we’ve helped thousands of instructors learn how to
          record at home. No matter your experience level, you can become a
          video pro too. We’ll equip you with the latest resources, tips, and
          support to help you succeed.
        </p>

        <div className='instructor-box mt-4'>
          <div className='form-group'>
            <label htmlFor='videoPro' className='form-label'>
              How much of a video “pro” are you?
            </label>
            <select
              id='videoPro'
              className='form-select'
              name='videoPro'
              value={videoPro}
              onChange={handleChange}
            >
              <option defaultValue>Choose One</option>
              <option>I'm a beginner</option>
              <option>I have some knowledge</option>
              <option>I'm Experienced</option>
              <option>I have videos ready to upload</option>
            </select>
          </div>
        </div>
      </div>

      <div className='instructor-bottom'>
        <button
          onClick={() => navigation.previous()}
          className='btn btn-primary px-4'
        >
          PREVIOUS
        </button>

        <button onClick={() => navigation.next()} className='btn btn-primary'>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default InstructorBoardTwo;
