import React from 'react';
import { Link } from 'react-router-dom';
import './Author.css';

import female from '../../assets/female.png';

const Author = ({ values, pic }) => {
  if (!values) return null;
  return (
    <div className='author'>
      <h3>Instructor</h3>
      <div className='card'>
        <div className='card-body'>
          <Link to={`/courses/instructor/${values._id}`}>
            <h4>{values.fullname}</h4>
          </Link>
          <p>{values.bio}</p>
          <div className='author-center'>
            <div className='author-image'>
              <img src={pic ? female : values.avatar} alt='' />
            </div>

            <div className='author-text'>
              <p>{values.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
