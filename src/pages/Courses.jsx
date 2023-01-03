import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import Course from './../components/courses/Courses';

import SEO from './../SEO/SEO';
import Loading from './../components/common/Loading';

const Courses = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  if (loading) {
    return (
      <div className='load'>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <SEO title='All Courses' />
      <Header />
      <Course />
      <Footer />
    </div>
  );
};

export default Courses;
