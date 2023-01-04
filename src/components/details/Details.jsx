import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { GlobalState } from './../../GlobalState';
import './Details.css';
import { Language, NoteAdd, TimelapseRounded } from '@material-ui/icons';
import { YouLearn } from './YouLearn';
import Description from './Description';
import Feedback from './Feedback';
import female from '../../assets/female.png';
import Rating from './../views/Rating';
import { format } from 'timeago.js';
import Author from './Author';
import { Toaster } from 'react-hot-toast';
import Loading from './../common/Loading';

const Details = () => {
  const state = useContext(GlobalState);
  const [course] = state.course.course;
  const [isLogged] = state.userApi.isLogged;
  const [loading, setLoading] = useState(true);
  const [detailCourse, setDetailCourse] = useState([]);
  const params = useParams();
  const history = useHistory();
  const [pic, setPic] = useState(true);
  const [cart] = state.userApi.cart;
  const addCart = state.userApi.addCart;
  const [values, setValues] = useState([]);
  const endpoint = process.env.REACT_APP_API;
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (params) {
      course.forEach((item) => {
        if (item._id === params.id) setDetailCourse(item);
      });
      setPic(false);
      setLoading(false);
    }
  }, [params, course]);

  useEffect(() => {
    const getCourse = async () => {
      const res = await axios.get(endpoint + `/api/courses/${params.id}`, {
        headers: { Authorization: token },
      });
      setValues(res.data.course[0].user);
      // console.log(res.data.course[0].user);
      // setLoading(false);
    };
    getCourse();
  }, [params, endpoint, token]);

  const goBack = () => {
    history.goBack();
  };

  const {
    _id,
    images,
    author,
    comments,
    title,
    createdAt,
    rating,
    desc,
    numReviews,
  } = detailCourse;

  // CHECKING IF THE USER HAS ENROLLED FOR A PARTICULAR COURSE
  const loop = cart.filter((item) => {
    return item._id === _id;
  });

  if (detailCourse.length === 0) return null;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='details'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='details-hero'>
        <div className='details-left'>
          <div>
            <h1>{title}</h1>
            <h4>{comments}</h4>
            <div className='mb-3 d-flex rating-value'>
              <Rating value={rating} />
              <span className='revi'>{`${numReviews} Reviews`}</span>
            </div>
            <p>
              <NoteAdd className='details-icon' />
              Created By : {author}
            </p>
            <TimelapseRounded className='details-icon' />
            <span>Last Updated : {format(createdAt)}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Language className='details-icon' />
            <span>Language : English</span>
          </div>
          <button onClick={goBack} className='btn btn-primary mt-3'>
            Go Back
          </button>
        </div>

        <div className='details-right'>
          <>
            <div className='details-right-center'>
              <img src={pic ? female : images.url} alt='' />
            </div>
            <button
              onClick={() => addCart(detailCourse)}
              className='btn btn-primary mt-2 py-2 w-100'
            >
              {loop.length !== 0 && loop[0]._id === _id
                ? 'COURSE ENROLLED'
                : 'TAKE THIS COURSE'}
            </button>
          </>
        </div>
      </div>

      <div className='container'>
        {/* What you will learn section */}
        <YouLearn />

        {/* Description section */}
        <Description desc={desc} />

        {/* The Author section */}
        {isLogged && <Author values={values} pic={pic} />}

        {/* Student feedback section */}
        <Feedback detailCourse={detailCourse} />
      </div>
    </div>
  );
};

export default Details;
