import { Home } from '@material-ui/icons';
import React from 'react';
import './CategoryHero.css';
import { Link } from 'react-router-dom';

const CourseHero = () => {
  return (
    <div className='category-hero'>
      <div className='category-hero-center'>
        <div className='category-hero-top'>
          <Home className='category-hero-icon' />
          <Link to='/' className='category-hero-link'>
            Home
          </Link>
          &nbsp; / &nbsp;
          <Link to='/courses' className='category-hero-link'>
            categories
          </Link>
          &nbsp; / &nbsp; frontend
        </div>
        <div className='category-hero-bottom'>
          <h2>Courses</h2>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
