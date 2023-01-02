import React from 'react';
import './Description.css';

const Description = ({ desc }) => {
  return (
    <div className='description'>
      <div className='card'>
        <div className='card-body'>
          <h2>Description</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
