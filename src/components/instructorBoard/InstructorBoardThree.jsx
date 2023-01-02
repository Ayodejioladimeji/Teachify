import React from 'react';
import './InstructorBoard.css';
import { Toaster } from 'react-hot-toast';

const InstructorBoardThree = ({
  navigation,
  audience,
  handleUpdate,
  handleChange,
}) => {
  return (
    <div className='instructor'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='instructor-top mt-3'>
        <p>Step 3 of 3</p>
        <h3>Expand your reach</h3>
        <p>
          Once you publish your course, you can grow your student audience and
          make an impact with the support of Teachify's marketplace promotions
          and also through your own marketing efforts. Together, we’ll help the
          right students discover your course.
        </p>

        <div className='instructor-box mt-4'>
          <div className='form-group'>
            <label htmlFor='audience' className='form-label'>
              Do you have an audience to share your course with?
            </label>
            <select
              id='audience'
              className='form-select'
              name='audience'
              value={audience}
              onChange={handleChange}
            >
              <option defaultValue>Choose One</option>
              <option>Not at the moment</option>
              <option>I have a small following</option>
              <option>I have a sizeable following</option>
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

        <button onClick={handleUpdate} className='btn btn-primary px-4'>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default InstructorBoardThree;
