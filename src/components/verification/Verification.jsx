import React from 'react';
import './verification.css';

import verify from './verify.png';

const Verification = () => {
  return (
    <div className='verification'>
      <div className='verified-center'>
        <div className='verify-image'>
          <img src={verify} alt='verify-pic' />
        </div>

        <div className='verify-div'>
          <h2>Confirm Your Email Address</h2>
          <p>We sent a confirmation mail to you</p>
          <p>
            Check your email and click on the confirmation button to Activate
            your Account
          </p>
          <div className='open'>
            <a href='https://www.gmail.com'>Open Gmail</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
