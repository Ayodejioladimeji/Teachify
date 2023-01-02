import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './../views/Rating';

const StartCard = ({ ...item }) => {
  const { _id, images, author, title, rating, numReviews } = item;
  return (
    <div className='startcard'>
      <div className='startcard-left'>
        <img src={images.url} alt='' />
      </div>

      <div className='startcard-right'>
        <div className='startcard-top'>
          <p>Author: {author}</p>
        </div>
        <div className='mb-3 d-flex rating-value'>
          <Rating value={rating} />
          <span className='rev'>{`${numReviews} Reviews`}</span>
        </div>
        <div className='startcard-bottom'>
          <p
            dangerouslySetInnerHTML={{
              __html: title.substring(0, 28).trim() + '...',
            }}
          ></p>
        </div>
        <Link to={`/courses/details/${_id}`}>
          <button className='btn btn-primary'>Start Course</button>
        </Link>
      </div>
    </div>
  );
};

export default StartCard;
