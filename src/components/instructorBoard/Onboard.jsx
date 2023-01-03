import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import './Onboard.css';
import Loading from './../common/Loading';

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
              <Loading />
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
