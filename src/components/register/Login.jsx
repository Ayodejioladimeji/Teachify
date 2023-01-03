import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { showErrMsg } from '../../utils/Notification';
import './Login.css';

import { isEmpty, isEmail, isLength } from '../../utils/Validation';

const initialState = {
  email: '',
  password: '',
  err: '',
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [typePass, setTypePass] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const { email, password, err } = values;
  const { CLIENT_ID } = process.env;

  // THE SECTION OF THE HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      err: '',
    });
  };

  // THE SECTION OF THE HANDLE REGISTER
  const handleLogin = async (e) => {
    e.preventDefault();
    if (isEmpty(email) || isEmpty(password))
      return setValues({ ...values, err: 'Fields cannot be empty!!!' });

    if (!isEmail(email)) return setValues({ ...values, err: 'Invalid Email' });

    if (isLength(password))
      return setValues({
        ...values,
        err: 'Your password should be more than 8 characters',
      });

    try {
      const res = await axios.post('/user/login', {
        ...values,
      });

      setValues(
        {
          ...values,
        },
        setButtonLoading(true),
        toast.success(res.data['msg'])
      );

      localStorage.setItem('firstLogin', true);

      setTimeout(() => {
        window.location.href = '/';
      }, 2500);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  // The section of the google login
  const responseGoogle = async (response) => {
    try {
      const res = await axios.post('/user/google_login', {
        tokenId: response.tokenId,
      });

      setValues({ ...values });

      localStorage.setItem('firstLogin', true);
      toast.success(res.data.msg);
      // console.log(res.data);
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (err) {
      setValues({ ...values });
      toast.error(err.response.data.msg);
    }
  };

  return (
    <div className='login'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='login-center'>
        <ul className='list-group'>
          <li className='list-group-item active' aria-current='true'>
            Login to continue
          </li>
          <li className='list-group-item'>
            <div className='social-box'>
              <GoogleLogin
                clientId={CLIENT_ID}
                buttonText='Google Signin'
                className='social-one'
                onSuccess={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>

            <div className='login-details'>
              <h5>User Login Details</h5>
              <small>Email : brightlayo11@gmail.com</small>
              <small>Password : brightlayo</small>
            </div>

            <div className='col-md-12 py-3'>
              <form
                onSubmit={handleLogin}
                className='row g-3 justify-content-center'
              >
                <div className='col-md-12'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder='Email'
                  />
                </div>

                <div className='col-md-12 pass'>
                  <label htmlFor='password' className='form-label'>
                    Password
                  </label>
                  <input
                    type={typePass ? 'text' : 'password'}
                    className='form-control'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    id='password'
                    placeholder='**********'
                  />
                  <div className='eyes' onClick={() => setTypePass(!typePass)}>
                    {typePass ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>

                <div className='col-md-12'>{err && showErrMsg(err)}</div>

                <div className='col-md-12 button-div'>
                  <button type='submit' className='btn py-2 '>
                    {buttonLoading ? (
                      <div
                        style={{ width: '2rem', height: '2rem' }}
                        className='text-white spinner-border '
                        role='status'
                      >
                        <span className='sr-only text-white'></span>
                      </div>
                    ) : (
                      'Login'
                    )}
                  </button>
                </div>
                <span className='text-center mt-1'>
                  <Link to='/forgot_password'>Forgot Password ?</Link>
                </span>
              </form>
            </div>
          </li>

          <li className='list-group-item'>
            Not a member?{' '}
            <span>
              <Link className='already' to='/register'>
                Register here
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
