import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { GlobalState } from './../../GlobalState';
import toast from 'react-hot-toast';
import { isEmpty } from '../../utils/Validation';

import { useStep } from 'react-hooks-helper';
import { Stepone } from './step/Stepone';
import { Steptwo } from './step/Steptwo';
import { Stepthree } from './step/Stepthree';
import { Stepfour } from './step/Stepfour';
import './step/Step.css';

const defaultData = {
  // course_id: '',
  title: '',
  author: '',
  level: '',
  category: '',
  topic: '',
  comments: '',
  type: '',
  link: '',
  learn: '',
  desc: '',
};

const steps = [
  { id: 'stepone' },
  { id: 'steptwo' },
  { id: 'stepthree' },
  { id: 'stepfour' },
];

export const MultiStepForm = () => {
  const state = useContext(GlobalState);
  const [course, setCourse] = useState(defaultData);
  const [categories] = state.categories.categories;
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);

  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const {
    learn,
    desc,
    title,
    author,
    topic,
    link,
    category,
    level,
    type,
    comments,
  } = course;

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
      setCourse(course);
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
      // if (!isAdmin) return toast.error("You're not an admin");
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

      setLoading(true);
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: token,
        },
      });
      setImages(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err.response);
      toast.error(err.response.data.msg);
    }
  };

  // The section of the handle destroy
  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        '/api/destroy',
        { public_id: images['public_id'] },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  // The section of the handlesubmie
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      isEmpty(learn) ||
      isEmpty(desc) ||
      isEmpty(title) ||
      isEmpty(author) ||
      isEmpty(topic) ||
      isEmpty(link) ||
      isEmpty(category) ||
      isEmpty(level) ||
      isEmpty(type) ||
      isEmpty(comments)
    )
      return setCourse({ ...course }, toast.error('Fields cannot be empty'));

    try {
      if (!images) return toast.error('No Image Upload');

      if (onEdit) {
        await axios.put(
          `/api/courses/${course._id}`,
          { ...course, images },
          {
            headers: { Authorization: token },
          }
        );

        history.push('/dashboard/my_courses');
      } else {
        await axios.post(
          '/api/courses',
          { ...course, images },
          {
            headers: { Authorization: token },
          }
        );
      }

      setCallback(!callback);
      toast.success(onEdit ? 'Course Updated' : 'Course Created');
      setTimeout(() => {
        window.location.href =
          'https://teachify-learning.netlify.app/dashboard/my_courses';
      }, 1500);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.msg);
    }
  };

  const props = { navigation };

  const styleUpload = {
    display: images ? 'block' : 'none',
  };

  switch (step.id) {
    case 'stepone':
      return (
        <Stepone
          {...props}
          course={course}
          handleChangeInput={handleChangeInput}
        />
      );
    case 'steptwo':
      return (
        <Steptwo
          {...props}
          categories={categories}
          course={course}
          handleChangeInput={handleChangeInput}
        />
      );
    case 'stepthree':
      return (
        <Stepthree
          {...props}
          styleUpload={styleUpload}
          images={images}
          handleUpload={handleUpload}
          handleDestroy={handleDestroy}
          course={course}
          loading={loading}
          handleChangeInput={handleChangeInput}
        />
      );
    case 'stepfour':
      return (
        <Stepfour
          {...props}
          handleSubmit={handleSubmit}
          loading={loading}
          course={course}
          handleChangeInput={handleChangeInput}
        />
      );

    default:
      return step;
  }
};
