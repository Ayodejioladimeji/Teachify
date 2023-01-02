import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import './InstructorProfile.css';
import Card from './../card/Card';
import { GlobalState } from './../../GlobalState';
import Loader from 'react-loader-spinner';

const InstructorProfile = () => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getInstructor = async () => {
      const res = await axios.get(`/api/courses/instructor/${id}`, {
        headers: { Authorization: token },
      });
      setData(res.data);
      setLoading(false);
    };
    getInstructor();
  }, [id, token]);

  const goBack = () => {
    history.goBack();
  };

  if (loading) {
    return (
      <div className='loadings' style={{ height: '100vh' }}>
        <Loader type='Circles' color='#00B87C' height={54} width={54} />
      </div>
    );
  }

  return (
    <div className='instructor'>
      <div className='fluid-container'>
        <div className='instructor-center'>
          <div className='instructor-left'>
            <h4>INSTRUCTOR</h4>
            <h1>{data.user.fullname}</h1>
            <h3>{data.user.bio}</h3>
            <p>{data.user.email}</p>

            <button onClick={goBack} className='btn btn-primary'>
              Go Back
            </button>
          </div>

          <div className='instructor-right'>
            <div className='pro-image'>
              <img src={data.user.avatar} alt='' />
            </div>
          </div>
        </div>

        <div className='instructor-center2 mt-5 mb-3'>
          <h4>About Me</h4>
          <p>{data.user.desc}</p>
        </div>

        <div className='instructor-card'>
          <p>Showing {data.posted.length} results</p>
          <div className='data-cente'>
            {data.posted.map((item) => (
              <Card {...item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
