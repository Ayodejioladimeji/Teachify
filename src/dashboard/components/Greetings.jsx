import React from 'react';
import '../styles/Greetings.css';
import book from '../../assets/study.svg';

const Greetings = () => {
  return (
    <div className='container ml-2'>
      <div className='row'>
        <div className='greetings col-lg-6'>
          <div className='greetings-left'>
            <h5>Welcome</h5>
            <h3>LayoBright</h3>
            <p>You have 0 courses on your Learning page</p>
          </div>

          <div className='greetings-right'>
            <img src={book} alt='' />
          </div>
        </div>
        <div className='col-lg-3'></div>
      </div>
    </div>
  );
};

export default Greetings;
