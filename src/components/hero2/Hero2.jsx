import React from 'react';
import './Hero2.css';
import desktop from '../../assets/desktop-PC.svg';
import chief from '../../assets/desktop-chef.svg';
import goal from '../../assets/career-goal.svg';
import degree from '../../assets/degree.svg';

const Hero2 = () => {
  return (
    <div className='container-fluid'>
      <section className='row what-we-offer-2'>
        <div className='col-lg-3 col-sm-6'>
          <div className='card pt-4 pb-4'>
            <img className='' src={desktop} alt='desktop PC' width='50' />
            <div className='card-body text-center'>
              <h5 className='card-title'>Learn the latest skills</h5>
              <p className='card-text'>
                Like business analytics, graphic design, Python, and more.
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-3 col-sm-6 mt-4 mt-sm-0'>
          <div className='card pt-4 pb-4'>
            <img className='' src={chief} alt='desktop PC' width='50' />
            <div className='card-body text-center'>
              <h5 className='card-title'>Get ready for a career</h5>
              <p className='card-text'>
                In high-demand fields like IT, AI and cloud engineering
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-3 col-sm-6 mt-4 mt-lg-0'>
          <div className='card pt-4 pb-4'>
            <img className='' src={goal} alt='desktop PC' width='50' />
            <div className='card-body text-center'>
              <h5 className='card-title'>Expert instruction</h5>
              <p className='card-text'>
                Every course designed by expert instructor
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-3 col-sm-6 mt-4 mt-lg-0'>
          <div className='card pt-4 pb-4'>
            <img className='' src={degree} alt='desktop PC' width='50' />
            <div className='card-body text-center'>
              <h5 className='card-title'>Earn a certificate</h5>
              <p className='card-text'>
                Get certified upon completing a course
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
