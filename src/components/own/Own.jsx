import React, { useContext } from 'react';
import './Own.css';

// PACKAGES
import { Link } from 'react-router-dom';
import { GlobalState } from './../../GlobalState';

const Own = () => {
  const state = useContext(GlobalState);
  const [isLogged] = state.userApi.isLogged;

  return (
    <div className='own'>
      <div className='own-center'>
        <div className='own-left'>
          <div className='own-left-center'>
            <div
              className='underline'
              data-aos='slide-righ'
              data-aos-once='true'
            ></div>
            <h3 data-aos='zoom-ou' data-aos-once='true'>
              Turn your{' '}
              <span
                style={{ color: 'var(--main)', textShadow: '1px 1px white' }}
              >
                Ambition
              </span>{' '}
              Into a{' '}
              <span
                style={{ color: 'var(--main)', textShadow: '1px 1px white' }}
              >
                success
              </span>{' '}
              story
            </h3>
            <p data-aos='fade-u' data-aos-once='true'>
              choose from over 100,000 online video courses with new additions
              published every month
            </p>
            <Link to={isLogged ? '/courses' : '/register'}>
              <button data-aos='fade-dow' data-aos-once='true'>
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className='own-right'>
          <div
            className='own-right-center'
            data-aos='fade-i'
            data-aos-once='true'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Own;
