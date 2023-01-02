import React from 'react';
import './Hero3.css';
import student from '../../assets/females.png';

const Hero3 = () => {
  return (
    <section className='course-decision'>
      <div className='course-decision-content'>
        <div className='row'>
          <div className='col-md-7 col-12 pe-md-0 order-1 order-md-0'>
            <h2 className='ps-4 pt-4 pb-3 turn'>
              Turn your <br />
              ambition into a <br />
              success story
            </h2>
            <div className='second-part ps-4 pt-3 pb-5'>
              <p className='pb-2'>
                choose from over 100,000 online <br />
                video courses with new additions <br />
                published every month
              </p>
              <a href='#' className='py-2 px-4 explore'>
                Explore
              </a>
            </div>
          </div>
          <div className='col-md-5 col-12 ps-md-0 order-0 order-md-1'>
            <img className='img-fluid' src={student} alt='female student' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
