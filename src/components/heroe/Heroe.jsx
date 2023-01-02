import React from 'react';
import './Hero1.css';

import Book from '../../assets/Book.svg';
import lifetime from '../../assets/lifetime-access.svg';
import courses from '../../assets/online-courses.svg';

const Hero1 = () => {
  return (
    <div className='container-fluid'>
      <section className='row what-we-offer-1'>
        <div className='col-md-4 col-sm-6'>
          <div className='d-flex align-baseline text-center'>
            <img src={courses} width='40' alt='16 online courses' />
            <div className='mt-1 ms-3'>
              <h5 className='mb-0'>16 Online Courses</h5>
              <p className='mb-0'>Explore a variety of fresh topics</p>
            </div>
          </div>
        </div>

        <div className='col-md-4 col-sm-6 mt-4 mt-sm-0'>
          <div className='d-flex align-baseline text-center'>
            <img src={Book} alt='book' width='40' />
            <div className='mt-1 ms-3'>
              <h5 className='mb-0'>Expert Instructions</h5>
              <p className='mb-0'>Find the right course for you</p>
            </div>
          </div>
        </div>

        <div className='col-md-4 col-sm-6 mt-4 mt-md-0'>
          <div className='d-flex align-baseline text-center'>
            <img src={lifetime} alt='course lifetime access' width='40' />
            <div className='mt-1 ms-3'>
              <h5 className='mb-0'>16 Online Courses</h5>
              <p className='mb-0'>Explore a variety of fresh topics</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
