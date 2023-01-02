import React from 'react';
import './FavouriteCourse.css';
import integration from '../../assets/design-integration.svg';
import fullstack from '../../assets/fullstack-dev.svg';
import development from '../../assets/web-development.svg';
import programming from '../../assets/user-programming.svg';
import { Category } from '@material-ui/icons';

const FavouriteCourse = () => {
  return (
    <section className='favorite-course'>
      <div
        className='
              d-flex
              align-items-center
              justify-content-between
              mb-4
              flex-wrap
            '
      >
        <h3>
          <Category className='favourite-cat' />
          Choose favorite course from top category
        </h3>
        <button className='btn'>Categories</button>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-sm-6 col-12'>
          <div className='card'>
            <span className='card-img mb-2'>
              <img className='' src={integration} alt='desktop PC' width='70' />
            </span>
            <div className='card-body p-0'>
              <h5 className='card-title mb-2'>
                Design <br />
                Integration
              </h5>
              <p className='card-text'>
                We give you the best design courses that suits your search We
                give you the best design courses that suits your search
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-3 col-sm-6 col-12 mt-4 mt-sm-0'>
          <div className='card'>
            <span className='card-img mb-2'>
              <img className='' src={development} alt='desktop PC' width='70' />
            </span>
            <div className='card-body p-0'>
              <h5 className='card-title mb-2'>
                Web <br />
                Development
              </h5>
              <p className='card-text'>
                We give you the best design courses that suits your search We
                give you the best design courses that suits your search
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-sm-6 col-12 mt-4 mt-lg-0'>
          <div className='card'>
            <span className='card-img mb-2'>
              <img className='' src={programming} alt='desktop PC' width='70' />
            </span>
            <div className='card-body p-0'>
              <h5 className='card-title mb-2'>
                User <br />
                Programming
              </h5>
              <p className='card-text'>
                We give you the best design courses that suits your search We
                give you the best design courses that suits your search
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-sm-6 col-12 mt-4 mt-lg-0'>
          <div className='card'>
            <span className='card-img mb-2'>
              <img className='' src={fullstack} alt='desktop PC' width='70' />
            </span>
            <div className='card-body p-0'>
              <h5 className='card-title mb-2'>
                FullStack <br />
                Development
              </h5>
              <p className='card-text'>
                We give you the best design courses that suits your search We
                give you the best design courses that suits your search
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavouriteCourse;
