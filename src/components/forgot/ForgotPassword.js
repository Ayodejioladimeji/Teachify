import React, { useState } from 'react';
import axios from 'axios';
import { isEmail } from '../../utils/Validation';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import './ForgotPassword.css';
const endpoint = process.env.REACT_APP_API;

const initialState = {
  email: '',
};

const ForgotPassword = () => {
  const [data, setData] = useState(initialState);
  const { email } = data;

  // The section of the handle change input
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const forgotPassword = async () => {
    if (!isEmail(email))
      return setData({ ...data }, toast.error('invalid Email'));

    try {
      const res = await axios.post(endpoint + '/user/forgot', { email });

      setData({ ...data }, toast.success(res.data.msg));
      setData({ email: '' });
      //   setTimeout(() => {
      //     history.push = "/login";
      //   }, 3500);
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data }, toast.error(err.response.data.msg));
    }
  };

  return (
    <div className='forgot'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='fg_pass'>
        <h2>Forgot Your Password?</h2>

        <div className='row'>
          <label htmlFor='email'>Enter your email address</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={handleChangeInput}
          />
          <button onClick={forgotPassword}>Verify your email</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
