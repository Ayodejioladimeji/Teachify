import React from 'react';
import Header from '../components/header/Header';
import InstructorProfile from './../components/instructorProfile/InstructorProfile';
import SEO from './../SEO/SEO';

const InstructorProfiles = () => {
  return (
    <div>
      <SEO title='Instructor Profile' />
      <Header />
      <InstructorProfile />
    </div>
  );
};

export default InstructorProfiles;
