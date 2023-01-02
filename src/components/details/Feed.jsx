import React from 'react';
// import female from '../../assets/female.png';
import Rating from './../views/Rating';
import { format } from 'timeago.js';

const Feed = ({ ...item }) => {
  const { name, rating, comment, createdAt, img } = item;

  return (
    <div className='row feedback-center mb-4'>
      <div className='col-lg-1 col-md-2 feedback-left'>
        <div className='feed-image'>
          <img src={img} alt='' />
        </div>
      </div>

      <div className='col-lg-11 col-md-10 feedback-right'>
        <div className='feed-text'>
          <h2>{name}</h2>
          <Rating value={rating} />
          <small>{format(createdAt)}</small>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
