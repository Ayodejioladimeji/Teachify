import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { showErrMsg, showSuccessMsg } from '../../utils/Notification';
import rejected from './rejected.jpg';
import download from './verified.jpg';
import './activationEmail.css';
const endpoint = process.env.REACT_APP_API;

//

const ActivationEmail = () => {
  const { activation_token } = useParams();
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(endpoint + '/user/activation', {
            activation_token,
          });
          setSuccess(res.data.msg);
        } catch (err) {
          err.response.data.msg && setErr(err.response.data.msg);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  //   THE VERIFIED FUNCTION

  const activate = () => {
    return (
      <>
        <div className='activation-image'>
          <img src={download} alt='active' />
        </div>

        <div className='active-div'>
          <h2>VERIFIED</h2>
          <p>{success && showSuccessMsg(success)}</p>
          <button onClick={() => history.push('/login')}>
            Proceed to Login
          </button>
        </div>
      </>
    );
  };

  const nonactivate = () => {
    return (
      <>
        <div className='activation-image'>
          <img src={rejected} alt='active' />
        </div>

        <div className='active-div'>
          <h2>UNVERIFIED</h2>
          <p>{err && showErrMsg('Verification Expired')}</p>
          <button onClick={() => history.push('/register')}>
            Kindly Re-register
          </button>
        </div>
      </>
    );
  };

  return (
    <div className='activation'>
      <div className='activation-center'>
        {success ? activate() : ''}
        {err ? nonactivate() : ''}
      </div>
    </div>
  );
};

export default ActivationEmail;
