import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import './UserProfile.css';
// import Card from './../card/Card';
import { GlobalState } from './../../GlobalState';
import Loading from './../common/Loading';
const endpoint = process.env.REACT_APP_API;
//

const UserProfile = () => {
  const state = useContext(GlobalState);
  const [user] = state.userApi.user;
  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(endpoint + `/user/social/profile/${id}`, {
        headers: { Authorization: token },
      });
      setData(res.data);
      setLoading(false);
    };
    getUser();
  }, [id, token]);

  const goBack = () => {
    history.goBack();
  };

  if (loading) {
    return (
      <div className='loadings' style={{ height: '100vh' }}>
        <Loading />
      </div>
    );
  }

  const newData = data.posted.filter((item) => item.images);

  return (
    <div className='instructor'>
      <div className='container'>
        <div className='instructor-center'>
          <div className='instructor-left'>
            <h4 className='btn btn-primary text-white'>USER</h4>
            <h1>{data.user.fullname}</h1>
            <h3>{data.user.bio}</h3>
            <p>{data.user.email}</p>
            <p>{data.user.stack}</p>
            <div className='instructor-follow'>
              <p>1 posts</p>
              <p>2 followers</p>
              <p> 0 followings</p>
            </div>
            <div className='d-flex'>
              <button onClick={goBack} className='btn btn-primary'>
                Go Back
              </button>
              {user._id !== id && (
                <button className='btn btn-primary mx-3 px-3'>Follow</button>
              )}
            </div>
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
          {/* {data.posted.length !== 0 ? (
            <p>Showing {data.posted.length} results</p>
          ) : null} */}
          <div className='data-cente'>
            {newData.map((item) => {
              return (
                <div className='post-image' key={item._id}>
                  <img src={item.images.url} alt='' />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
