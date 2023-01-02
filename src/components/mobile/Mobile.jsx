import React from 'react';

// import group from '../../assets/group.png';
import './Mobile.css';

const Mobile = () => {
  return (
    <div className='mobile'>
      <div className='mobile-image'>
        <img
          src='https://res.cloudinary.com/mamazee/image/upload/v1637076101/Teachify/Frame_576_tk9nxo.svg'
          alt='mobile'
        />
      </div>

      <div className='mobile-texts'>
        <div className='mobile-texts-center'>
          <h1>Download our app today</h1>

          <p>
            Search on the go with our mobile app. Our app makes it easy to
            browse our listings and make an offer right from your phone.
          </p>
          <p>
            We work hard to find the listings that are most relevant to you,
            making your search easier. From finding the right location to a
            manageable commute and beyond, we‘re genuinely pumped about helping
            you through the entire process.
          </p>

          <div className='flex'>
            <img src='' alt='' />
            <img src='' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
