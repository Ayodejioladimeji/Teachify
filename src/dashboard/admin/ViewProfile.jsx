import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import Loader from 'react-loader-spinner';
import '../styles/Profile.css';
import { GlobalState } from './../../GlobalState';

const ViewProfile = () => {
  const state = useContext(GlobalState);
  // const [user] = state.userApi.user;
  const [values] = state.userApi.values;
  const [loading, setLoading] = state.userApi.loading;
  const [detailUser, setDetailUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      values.forEach((item) => {
        if (item._id === id) setDetailUser(item);
      });
      setLoading(false);
    }
  }, [id, detailUser, setLoading, values]);

  const { avatar, fullname, email, username, gender, role, bio, desc, stack } =
    detailUser;

  if (loading) {
    return (
      <div className='loadings'>
        <Loader type='Circles' color='#00B87C' height={34} width={34} />
      </div>
    );
  }

  return (
    <div className='profiling'>
      <div className='card mb-3 profile-center'>
        <div className='row'>
          <div className='avata'>
            <img
              src={avatar}
              className='img-thumbnail h-100 rounded-start'
              alt='...'
            />
          </div>

          <div className='col-md-12 row justify-content-center'>
            <div className='col-md-6'>
              <label htmlFor='fullname' className='form-label'>
                Full Name
              </label>
              <div className='profile-input'>{fullname}</div>
            </div>
            <div className='col-md-6'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <div className='profile-input'>{email}</div>
            </div>

            <div className='col-md-6'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <div className='profile-input'>{username}</div>
            </div>

            <div className='col-md-6'>
              <label htmlFor='gender' className='form-label'>
                Gender
              </label>
              <div className='profile-input'>{gender}</div>
            </div>

            <div className='col-md-6'>
              <label htmlFor='gender' className='form-label'>
                What you do
              </label>
              <div className='profile-input'>{stack}</div>
            </div>

            <div className='col-md-6'>
              <label htmlFor='role' className='form-label'>
                Role
              </label>
              <div className='profile-input'>{role}</div>
            </div>

            <div className='col-md-6 text-area'>
              <label htmlFor='message' className='form-label'>
                Bio
              </label>
              <div className='profile-text'>{bio}</div>
            </div>

            <div className='col-md-6 text-area'>
              <label htmlFor='message' className='form-label'>
                Describe Yourself
              </label>
              <div className='profile-text'>{desc}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
