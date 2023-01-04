import React, { useState, useContext, useRef } from 'react';
import axios from 'axios';
// import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import '../styles/Profile.css';
import { GlobalState } from './../../GlobalState';
import Loading from './../../components/common/Loading';
const endpoint = process.env.REACT_APP_API;

const initialState = {
  fullname: '',
  email: '',
  username: '',
  role: '',
  gender: '',
  bio: '',
  stack: '',
  desc: '',
};

const EditProfile = () => {
  const avatarRef = useRef(null);
  const [buttonLoading] = useState(false);
  const state = useContext(GlobalState);
  const token = localStorage.getItem('token');
  const [loading, setLoading] = state.userApi.loading;
  const user = state.userApi.user[0];
  const [callback, setCallback] = state.userApi.callback;

  const [data, setData] = useState(initialState);
  const { fullname, email, username, role, gender, bio, stack, desc } = data;

  const [avatar, setAvatar] = useState(false);

  // The handleChange section
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // The change Avatar section
  const changeAvatar = async (e) => {
    // e.preventDefault();
    try {
      const file = e.target.files[0];

      if (!file) return setData({ ...data }, alert('No files were uploaded'));

      if (file.size > 1024 * 1024)
        return setData({ ...data }, alert('Size too large'));

      if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        return setData({ ...data }, alert('File format not supported'));

      let formData = new FormData();
      formData.append('file', file);

      setLoading(true);
      const res = await axios.post(endpoint + '/api/upload_avatar', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: token,
        },
      });

      setLoading(false);
      setAvatar(res.data.url);
    } catch (err) {
      setData({ ...data }, alert(err.response.data.msg));
    }
  };

  // The update information section
  const updateInfor = () => {
    try {
      axios.patch(
        endpoint + '/user/update',
        {
          fullname: fullname ? fullname : user.fullname,
          username: username ? username : user.username,
          email: email ? email : user.email,
          role: role ? role : user.role,
          gender: gender ? gender : user.gender,
          bio: bio ? bio : user.bio,
          avatar: avatar ? avatar : user.avatar,
          stack: stack ? stack : user.stack,
          desc: desc ? desc : user.desc,
        },
        {
          headers: { Authorization: token },
        }
      );
      setData({ ...data });
      alert('Updated successfully!');
      setCallback(!callback);
    } catch (err) {
      setData({ ...data }, alert(err.response.data.msg));
    }
  };

  // The handleUpdate section
  const handleUpdate = () => {
    if (
      fullname ||
      username ||
      email ||
      role ||
      gender ||
      bio ||
      avatar ||
      stack ||
      desc
    )
      updateInfor();
  };

  return (
    <div className='profiling'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='mb-3 profile-center'>
        <div className='row'>
          <div className='col-md-4 avata'>
            <div className='load'>
              {loading && (
                <div className='load'>
                  <Loading />
                </div>
              )}
            </div>
            <img
              src={avatar ? avatar : user.avatar}
              className='img-thumbnail h-100 rounded-start'
              alt='...'
              ref={avatarRef}
            />
            <span>
              {/* <CameraAlt className='camera' /> */}
              <p>UPLOAD</p>
              <input
                type='file'
                name='file'
                id='file_up'
                onChange={changeAvatar}
              />
            </span>
          </div>

          <div className='container-fluid'>
            <div className='col-md-12 py-3 row justify-content-center'>
              <div className='col-md-6 mb-3'>
                <label htmlFor='fullname' className='form-label'>
                  Full Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='fullname'
                  name='fullname'
                  defaultValue={user.fullname}
                  onChange={handleChange}
                />
              </div>

              <div className='col-md-6 mb-3'>
                <label htmlFor='username' className='form-label'>
                  Username
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='username'
                  name='username'
                  defaultValue={user.username}
                  onChange={handleChange}
                />
              </div>

              <div className='col-md-6 mb-3'>
                <label htmlFor='email' className='form-label'>
                  email
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='email'
                  name='email'
                  defaultValue={user.email}
                  onChange={handleChange}
                  disabled
                />
              </div>

              <div className='col-md-6 mb-3'>
                <label htmlFor='role' className='form-label'>
                  role
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='role'
                  name='role'
                  defaultValue={user.role}
                  onChange={handleChange}
                  disabled
                />
              </div>

              <div className='col-md-6 mb-3'>
                <label htmlFor='gender' className='form-label'>
                  Gender
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='gender'
                  name='gender'
                  defaultValue={user.gender}
                  onChange={handleChange}
                />
              </div>

              <div className='col-md-6 mb-3'>
                <label htmlFor='stack' className='form-label'>
                  What do you do?
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='stack'
                  name='stack'
                  defaultValue={user.stack}
                  onChange={handleChange}
                  placeholder='Eg : Frontend Developer'
                />
              </div>

              <div className='col-md-6 mb-3'>
                <label htmlFor='message' className='form-label'>
                  Bio
                </label>
                <textarea
                  className='form-control'
                  defaultValue={user.bio}
                  onChange={handleChange}
                  id='bio'
                  name='bio'
                  placeholder='Whats your bio'
                />
              </div>

              <div className='col-md-6 mb-3'>
                <label htmlFor='message' className='form-label'>
                  Say more about you
                </label>
                <textarea
                  className='form-control'
                  defaultValue={user.desc}
                  onChange={handleChange}
                  minLength='100'
                  maxLength='250'
                  id='desc'
                  name='desc'
                  placeholder='Describe your achievement'
                />
              </div>

              <div className='col-12 mb-4 profile-button'>
                <button
                  type='submit'
                  className='btn mt-3 py-2 w-100'
                  onClick={handleUpdate}
                >
                  {buttonLoading ? (
                    <div
                      style={{ width: '2rem', height: '2rem' }}
                      className='text-white spinner-border '
                      role='status'
                    >
                      <span className='sr-only text-white'></span>
                    </div>
                  ) : (
                    'UPDATE PROFILE'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
