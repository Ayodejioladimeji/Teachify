import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Onboard from '../components/instructorBoard/Onboard';
import SEO from './../SEO/SEO';
import Loading from './../components/common/Loading';

const OnBoard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
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
      <SEO title='Onboarding' />
      <Header />
      <Onboard />
    </div>
  );
};

export default OnBoard;
