import React from 'react';
import star from '../../assets/free-star.svg';
import { Link } from 'react-router-dom';
import './Card.css';
import Rating from './../views/Rating';

const Card = ({ ...item }) => {
  const { _id, images, title, topic, author, rating, numReviews } = item;
  return (
    <article className='data-card'>
      <div className='data-card-top'>
        <div className='data-image'>
          <img src={images.url} alt='' />
        </div>
      </div>

      <div className='data-card-bottom'>
        <h4
          className='card-title'
          dangerouslySetInnerHTML={{
            __html: title.substring(0, 28).trim() + '...',
          }}
        ></h4>
        <small>{author}</small> <br />
        <div className='mb-3 d-flex rating-value'>
          <Rating value={rating} />
          <span className='rev'>{`${numReviews} Reviews`}</span>
        </div>
        <div
          className='
                card-content 
                d-flex
                align-items-center
                justify-content-between
                '
        >
          <h5>{topic}</h5>
          <img src={star} alt='free course icon' />
        </div>
        <Link to={`/courses/details/${_id}`}>
          <button className='btn mt-2 w-100'>Start Course</button>
        </Link>
      </div>
    </article>
  );
};

export default Card;
