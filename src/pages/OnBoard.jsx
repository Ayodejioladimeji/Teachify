import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Header from '../components/header/Header';
import Onboard from '../components/instructorBoard/Onboard';
import SEO from './../SEO/SEO';

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
        <Loader type='Circles' color='#00B87C' height={54} width={54} />
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
