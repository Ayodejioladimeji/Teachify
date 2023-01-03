import React, { useContext } from 'react';
import '../styles/Profile.css';
import { GlobalState } from './../../GlobalState';
import Loading from './../../components/common/Loading';

const Profile = () => {
  const state = useContext(GlobalState);
  const [user] = state.userApi.user;
  const [loading] = state.userApi.loading;

  const { avatar, fullname, email, username, gender, role, bio, desc, stack } =
    user;

  if (loading) {
    return (
      <div className='loadings'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='profiling'>
      <div className='mb-3 profile-center'>
        <div className='row'>
          <div className='avata'>
            <img
              src={avatar}
              className='img-thumbnail h-100 rounded-start'
              alt='...'
            />
          </div>

          <div className='col-md-12 py-3 row justify-content-center information'>
            <div className='col-md-6 form-group'>
              <label htmlFor='fullname' className='form-label'>
                Full Name
              </label>
              <div className='profile-input'>{fullname}</div>
            </div>
            <div className='col-md-6 form-group'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <div className='profile-input'>{email}</div>
            </div>

            <div className='col-md-6 form-group'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <div className='profile-input'>{username}</div>
            </div>

            <div className='col-md-6 form-group'>
              <label htmlFor='gender' className='form-label'>
                Gender
              </label>
              <div className='profile-input'>{gender}</div>
            </div>

            <div className='col-md-6 form-group'>
              <label htmlFor='gender' className='form-label'>
                What you do
              </label>
              <div className='profile-input'>{stack}</div>
            </div>

            <div className='col-md-6 form-group'>
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

export default Profile;
