import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { GlobalState } from './../../GlobalState';
import './Views.css';
import Loader from 'react-loader-spinner';
import Player from './Player';
// import Feed from '../details/Feed';
import { isEmpty } from './../../utils/Validation';
import { showErrMsg } from './../../utils/Notification';
import Feedback from './../details/Feedback';

const initialState = {
  rating: '',
  comment: '',
  err: '',
};

const Views = () => {
  const [values, setValues] = useState(initialState);
  const state = useContext(GlobalState);
  const [course] = state.course.course;
  const [token] = state.token;
  const [loading, setLoading] = useState(true);
  const [callback, setCallback] = state.course.callback;
  const [back, setBack] = state.courses.back;
  const [detailCourse, setDetailCourse] = useState([]);
  const params = useParams();

  const { rating, comment, err } = values;
  const {
    link,
    title,
    _id,
    author,
    comments = comment,
    level,
    desc,
  } = detailCourse;

  useEffect(() => {
    if (params) {
      course.forEach((item) => {
        if (item._id === params.id) setDetailCourse(item);
      });
    }
    setLoading(false);
  }, [params, course, detailCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      err: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty(comment || rating))
      return setValues({ ...values, err: 'Fields cannot be empty' });

    Swal.fire({
      title: 'Are you sure?',
      text: 'You can only review this course once',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, continue!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(
            `/api/courses/${_id}/reviews`,
            {
              ...values,
            },
            {
              headers: { Authorization: token },
            }
          );

          setCallback(!callback);
          setBack(!back);
          setValues(res.data);
          setValues({ comment: '', rating: '', err: '' });
        } catch (error) {
          return setValues({ ...values, err: error.response.data.msg });
        }
        Swal.fire('Posted', 'Your review has been posted.', 'success');
      }
    });
  };

  if (detailCourse.length === 0) return null;

  if (loading) {
    return (
      <div className='loadingss'>
        <Loader type='Circles' color='#00B87C' height={54} width={54} />
      </div>
    );
  }
  return (
    <div className='views'>
      <div className='views-top'>
        <Player link={link} title={title} />
      </div>

      <div className='views-bottom'>
        <div className='container'>
          <div className='card'>
            <div className='card-body'>
              <div className='body-one'>
                <div className='card-header'>About this course</div>
                <div className='card-body'>
                  <p>{comments}</p>
                </div>
              </div>

              <div className='body-two'>
                <div className='card-header'>Levels</div>
                <div className='card-body'>
                  <p>Author : {author}</p>
                  <p>Skill Level : {level}</p>
                  <p>Video Duration : 30:00</p>
                  <p>Language : English</p>
                  <p>Caption : Yes</p>
                </div>
              </div>

              <div className='body-three'>
                <div className='card-header'>Description</div>
                <div className='card-body'>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='feedback mt-4'>
            {/* Student feedback section */}
            <Feedback detailCourse={detailCourse} />

            <div className='col-md-12 text-danger'>
              {err && showErrMsg(err)}
            </div>

            <div className='card-body mb-4'>
              <form onSubmit={handleSubmit}>
                <div className='form-group mb-4'>
                  <label htmlFor='rating' className='form-label'>
                    Share your experience
                  </label>
                  <select
                    id='rating'
                    className='form-control'
                    name='rating'
                    value={rating}
                    onChange={handleChange}
                  >
                    <option defaultValue>Rating</option>
                    <option value='1'>1- Bad</option>
                    <option value='2'>2- Fair</option>
                    <option value='3'>3- Good</option>
                    <option value='4'>4- Very good</option>
                    <option value='5'>5- Excelent</option>
                  </select>
                </div>

                <div className='mb-4'>
                  <textarea
                    className='form-control'
                    placeholder='Write your reviews'
                    id='comment'
                    name='comment'
                    value={comment}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div>
                  <button className='btn btn-primary w-100'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Views;
