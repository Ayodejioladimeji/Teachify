import React from 'react';
import './InstructorBoard.css';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const InstructorBoard = ({ navigation, handleChange, typeOfTeaching }) => {
  return (
    <div className='instructor'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='instructor-top mt-3'>
        <p>Step 1 of 3</p>
        <h3>Share your knowledge</h3>
        <p>
          Teachify courses are video-based experiences that give students the
          chance to learn actionable skills. Whether you have experience
          teaching, or it’s your first time, we’ll help you package your
          knowledge into an online course that improves student lives.
        </p>

        <div className='instructor-box mt-4'>
          <div className='form-group'>
            <label htmlFor='typeOfTeaching' className='form-label'>
              What kind of teaching have you done before?
            </label>
            <select
              id='typeOfTeaching'
              className='form-select'
              name='typeOfTeaching'
              value={typeOfTeaching}
              onChange={handleChange}
            >
              <option defaultValue>Choose One</option>
              <option>Informally</option>
              <option>Professionally</option>
              <option>Online</option>
            </select>
          </div>
        </div>
      </div>

      <div className='instructor-bottom'>
        <Link to='/dashboard/profile'>
          <button className='btn btn-primary px-4'>EXIT</button>
        </Link>

        <button className='btn btn-primary' onClick={() => navigation.next()}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default InstructorBoard;
