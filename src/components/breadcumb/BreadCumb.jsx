import React from 'react';
import './BreadCumb.css';
import { Link } from 'react-router-dom';
import { Home } from '@material-ui/icons';

const BreadCumb = ({ path, title }) => {
  return (
    <div className='bread-cumb'>
      <div className='breadcumb-hero'>
        <div className='breadcumb-hero-center'>
          <div className='breadcumb-hero-top'>
            <Home className='breadcumb-hero-icon' />
            <Link to='/' className='breadcumb-hero-link'>
              Home
            </Link>
            <Link to='/courses' className='breadcumb-hero-link'>
              {path}
            </Link>
          </div>
          <div className='breadcumb-hero-bottom'>
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCumb;
