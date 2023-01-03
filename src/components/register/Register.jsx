import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { showErrMsg } from '../../utils/Notification';
import './Register.css';

import Loading from './../common/Loading';
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
  isNameLength,
  isTerms,
} from '../../utils/Validation';

const initialState = {
  fullname: '',
  username: '',
  email: '',
  gender: '',
  password: '',
  cfpassword: '',
  terms: '',
  err: '',
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const [typePass, setTypePass] = useState(false);
  const [typePas, setTypePas] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const { CLIENT_ID } = process.env;

  const {
    fullname,
    email,
    username,
    terms,
    gender,
    password,
    cfpassword,
    err,
  } = values;

  // THE SECTION OF THE HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      err: '',
    });
  };

  // THE SECTION OF THE HANDLE CHECK
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setValues({
      ...values,
      [name]: checked,
      err: '',
    });
  };

  // THE SECTION OF THE HANDLE REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      isEmpty(fullname) ||
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(gender) ||
      isEmpty(password) ||
      isEmpty(cfpassword)
    )
      return setValues({ ...values, err: 'Fields cannot be empty!!!' });

    if (isTerms(terms))
      return setValues({
        ...values,
        err: 'Accept our Terms and Conditions to continue',
      });

    if (isNameLength(fullname))
      return setValues({ ...values, err: 'Names too short' });

    if (!isEmail(email)) return setValues({ ...values, err: 'Invalid Email' });

    if (isLength(password))
      return setValues({
        ...values,
        err: 'Your password should be more than 8 characters',
      });

    if (!isMatch(password, cfpassword))
      return setValues({ ...values, err: 'password does not match' });

    try {
      const res = await axios.post('/user/register', {
        ...values,
      });

      setValues(
        {
          ...values,
        },
        setButtonLoading(true),
        toast.success(res.data.msg)
      );

      setTimeout(() => {
        window.location.href = '/verification';
      }, 3500);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  // useEffect(() => {
  //   recaptchaLoaded();
  // }, []);

  // //  THE SECTION OF THE CAPTCHA
  // const recaptchaLoaded = () => {
  //   console.log('loaded successfully');
  // };

  // const verifyCallback = (response) => {
  //   if (response) {
  //     console.log(response);
  //     setVerified(true);
  //   }
  // };

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
    <div className='registration'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='registration-center'>
        <ul className='list-group'>
          <li className='list-group-item active' aria-current='true'>
            Register with us today
          </li>
          <li className='list-group-item'>
            <div className='social-box'>
              <GoogleLogin
                clientId={CLIENT_ID}
                buttonText='Google Signup'
                className='social-one'
                onSuccess={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>
            <div className='col-md-12 py-3'>
              <form
                onSubmit={handleRegister}
                className='row g-3 justify-content-center'
              >
                <div className='col-md-12'>
                  <label htmlFor='fullname' className='form-label'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='fullname'
                    name='fullname'
                    value={fullname}
                    onChange={handleChange}
                    placeholder='Fullname'
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor='username' className='form-label'>
                    User Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='username'
                    name='username'
                    value={username}
                    onChange={handleChange}
                    placeholder='Username'
                  />
                </div>
                <div className='col-md-6'>
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

                <div className='col-md-12'>
                  <label htmlFor='gender' className='form-label'>
                    Gender
                  </label>
                  <select
                    id='gender'
                    className='form-select'
                    name='gender'
                    value={gender}
                    onChange={handleChange}
                  >
                    <option defaultValue>Choose gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>

                <div className='col-md-6 pass'>
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
                <div className='col-md-6 pass'>
                  <label htmlFor='cfpassword' className='form-label'>
                    Confirm Password
                  </label>
                  <input
                    type={typePas ? 'text' : 'password'}
                    className='form-control'
                    name='cfpassword'
                    value={cfpassword}
                    onChange={handleChange}
                    id='cfpassword'
                    placeholder='**********'
                  />
                  <div className='eyes' onClick={() => setTypePas(!typePas)}>
                    {typePas ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>

                <div className='col-md-12 form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value={terms}
                    id='terms'
                    name='terms'
                    onChange={handleCheck}
                  />
                  <label className='form-check-label terms' htmlFor='terms'>
                    Agree to our terms and conditions
                  </label>
                </div>

                <div className='col-md-12 text-danger'>
                  {err && showErrMsg(err)}
                </div>

                {/* <div className='col-md-12 bg-primary'> */}
                {/* <Recaptcha
                  sitekey='6LfZS64dAAAAANtYnrf4M3hZDru2id2SO1LXA3r1'
                  render='explicit'
                  onloadCallback={recaptchaLoaded}
                  verifyCallback={verifyCallback}
                /> */}
                {/* </div> */}

                <div className='col-md-12 button-div'>
                  <button
                    type='submit'
                    className='btn py-2 '
                    // disabled={accept ? true : false}
                  >
                    {buttonLoading ? <Loading /> : 'Register'}
                  </button>
                </div>
              </form>
            </div>
          </li>

          <li className='list-group-item'>
            Already a member?{' '}
            <span>
              <Link className='already' to='/login'>
                Login here
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Register;
