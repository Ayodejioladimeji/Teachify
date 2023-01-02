import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import './Onboard.css';

const Onboard = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const push = () => {
    setLoading(true);
    setTimeout(() => {
      history.push('/dashboard/create_courses');
    }, 3500);
  };
  return (
    <div className='success_board'>
      <div className='success_center'>
        <h4>Congratulations!</h4>
        <h6>Together we can change the world</h6>
        <p>Now you can start Creating courses for review</p>
        <button onClick={push} className='btn btn-primary'>
          {loading ? (
            <div className='d-flex'>
              <Loader type='Oval' color='#fff' height={24} width={24} />
              &nbsp; Loading
            </div>
          ) : (
            'Start Creating Today'
          )}
        </button>
      </div>
    </div>
  );
};

export default Onboard;
