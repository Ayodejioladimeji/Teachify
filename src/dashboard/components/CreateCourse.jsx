import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { FaTimesCircle } from 'react-icons/fa';
import { useParams, useHistory } from 'react-router-dom';
import { GlobalState } from './../../GlobalState';
import '../styles/createCourses.css';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
// import { Loader } from 'react-loader-spinner';
import { isEmpty } from '../../utils/Validation';

const initialState = {
  // course_id: '',
  title: '',
  author: '',
  type: '',
  level: '',
  link: '',
  topic: '',
  comments: '',
  category: '',
  _id: '',
};

const CreateCourse = () => {
  const state = useContext(GlobalState);
  const [course, setCourse] = useState(initialState);
  const [categories] = state.categories.categories;
  const [images, setImages] = useState(false);
  // const [loading, setLoading] = useState(false);
  const {
    // course_id,
    link,
    title,
    topic,
    comments,
    level,
    category,
    author,
    type,
  } = course;

  const [isAdmin] = state.userApi.admin;
  const [token] = state.token;

  const history = useHistory();
  const param = useParams();

  const [courses] = state.courses.courses;
  const [onEdit, setOnEdit] = useState(false);
  const [callback, setCallback] = state.courses.callback;

  // The UseEffect section
  useEffect(() => {
    if (param.id) {
      setOnEdit(true);
      courses.forEach((course) => {
        if (course._id === param.id) {
          setCourse(course);
          setImages(course.images);
        }
      });
    } else {
      setOnEdit(false);
      setCourse(initialState);
      setImages(false);
    }
    // eslint-disable-next-line
  }, [param.id, courses]);

  // The section of the handlechange input
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  // The section of the handle upload
  const handleUpload = async (e) => {
    // e.preventDefault();
    try {
      if (!isAdmin) return toast.error("You're not an admin");
      const file = e.target.files[0];

      if (!file) return toast.error('File not exist.');

      if (file.size > 1024 * 1024)
        // 1mb
        return toast.error('Size too large!');

      if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        // 1mb
        return toast.error('File format is incorrect.');

      let formData = new FormData();
      formData.append('file', file);

      const res = await axios.post('/api/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: token,
        },
      });
      setImages(res.data);
    } catch (err) {
      console.log(err.response);
      toast.error(err.response.data.msg);
    }
  };

  // The section of the handle destroy
  const handleDestroy = async () => {
    try {
      // setLoading(true);
      await axios.post(
        '/api/destroy',
        { public_id: images['public_id'] },
        {
          headers: { Authorization: token },
        }
      );
      // setLoading(false);
      setImages(false);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  // The section of the handlesubmie
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      isEmpty(
        // course_id ||
        title ||
          topic ||
          level ||
          comments ||
          category ||
          author ||
          link ||
          type
      )
    )
      return setCourse({ ...course }, toast.error('Fields cannot be empty'));

    try {
      if (!isAdmin) return toast.error("You're not an admin");
      if (!images) return toast.error('No Image Upload');

      if (onEdit) {
        await axios.put(
          `/api/courses/${course._id}`,
          { ...course, images },
          {
            headers: { Authorization: token },
          }
        );
        history.push('/dashboard/all_courses');
      } else {
        await axios.post(
          '/api/courses',
          { ...course, images },
          {
            headers: { Authorization: token },
          }
        );
        history.push('/dashboard/all_courses');
      }

      setCallback(!callback);
      toast.success(onEdit ? 'Course Updated' : 'Course Created');
      setCourse({
        // course_id: '',
        title: '',
        level: '',
        author: '',
        type: '',
        topic: '',
        link: '',
        comments: '',
        category: '',
      });
      setImages({ images: '' });
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.msg);
    }
  };

  const styleUpload = {
    display: images ? 'block' : 'none',
  };

  return (
    <div className='create-course'>
      <Toaster position='top-center' reverseOrder={false} />
      <h2>{onEdit ? 'UPDATE COURSE' : 'CREATE NEW COURSE'}</h2>
      <form onSubmit={handleSubmit} className='row g-3'>
        <div className='col-md-6'>
          <label htmlFor='course_id' className='form-label'>
            Course ID
          </label>
          <input
            type='text'
            className='form-control'
            id='course_id'
            name='course_id'
            value={course.course_id}
            onChange={handleChangeInput}
            placeholder='Enter course id'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            className='form-control'
            id='title'
            name='title'
            value={course.title}
            onChange={handleChangeInput}
            placeholder='e.g PHP course for beginners'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='title' className='form-label'>
            Author
          </label>
          <input
            type='text'
            className='form-control'
            id='author'
            name='author'
            value={course.author}
            onChange={handleChangeInput}
            placeholder='layobright'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='level' className='form-label'>
            Course Level
          </label>
          <select
            id='level'
            className='form-select'
            name='level'
            value={course.level}
            onChange={handleChangeInput}
          >
            <option defaultValue>Choose level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Experts</option>
            <option>All Levels</option>
          </select>
        </div>
        <div className='col-md-6'>
          <label htmlFor='level' className='form-label'>
            Course Type
          </label>
          <select
            id='type'
            className='form-select'
            name='type'
            value={course.type}
            onChange={handleChangeInput}
            required
          >
            <option defaultValue>Choose Type</option>
            <option>New</option>
            <option>Start</option>
            <option>Featured</option>
          </select>
        </div>
        <div className='col-md-6'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select
            id='category'
            className='form-select'
            name='category'
            value={course.category}
            onChange={handleChangeInput}
          >
            <option value=''>Please select a category</option>
            {categories.map((category) => {
              return (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className='col-md-6'>
          <label htmlFor='topic' className='form-label'>
            Topic
          </label>
          <select
            id='topic'
            className='form-select'
            name='topic'
            value={course.topic}
            onChange={handleChangeInput}
          >
            <option defaultValue>Select topic</option>
            <option>HTML</option>
            <option>Css</option>
            <option>Javascript</option>
            <option>React</option>
            <option>Design</option>
            <option>Vue</option>
            <option>PHP</option>
            <option>Python</option>
            <option>Nodejs</option>
            <option>Laravel</option>
            <option>Git Flow</option>
          </select>
        </div>

        <div className='col-md-6'>
          <label htmlFor='message' className='form-label'>
            Comments
          </label>
          <textarea
            className='form-control'
            placeholder='Course Description'
            id='comments'
            name='comments'
            value={course.comments}
            onChange={handleChangeInput}
          ></textarea>
        </div>

        <div className='col-md-6'>
          <div className='upload'>
            <input
              type='file'
              name='file'
              id='file_up'
              onChange={handleUpload}
            />

            <div id='file_img' style={styleUpload}>
              <img src={images ? images.url : ''} alt='' />
              <FaTimesCircle onClick={handleDestroy} className='span' />
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <label htmlFor='intro' className='form-label'>
            Paste video link
          </label>
          <input
            type='text'
            className='form-control'
            id='link'
            name='link'
            value={course.link}
            onChange={handleChangeInput}
            placeholder='paste video link'
          />
        </div>

        {/* <div className='col-md-6'>
          <label htmlFor='intro' className='form-label'>
            Intro video
          </label>
          <select id='intro' className='form-select'>
            <option defaultValue>Select video source</option>
            <option>Youtube</option>
            <option>Vimeo</option>
            <option>Embedded</option>
          </select>
        </div> */}

        <div className='col-md-12'>
          <button className='btn btn-primary w-100 py-2'>
            {onEdit ? 'UPDATE COURSE' : 'CREATE COURSE'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
