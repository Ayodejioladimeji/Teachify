import React, { useState, useEffect } from 'react';

import Header from '../components/header/Header';
import { Step } from './../components/instructorBoard/Step';
import SEO from './../SEO/SEO';
import Loading from './../components/common/Loading';

const InstructorOnBoard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  });

  if (loading) {
    return (
      <div className='load'>
        <Loading type='Circles' color='#00B87C' height={54} width={54} />
      </div>
    );
  }
  return (
    <div>
      <SEO title='Instructors Onboarding' />
      <Header />
      <Step />
    </div>
  );
};

export default InstructorOnBoard;
