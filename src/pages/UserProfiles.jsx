import React from 'react';
import Header from '../components/header/Header';
import UserProfile from './../components/userProfile/UserProfile';
import SEO from './../SEO/SEO';

const UserProfiles = () => {
  return (
    <div>
      <SEO title='User Profile' />
      <Header />
      <UserProfile />
    </div>
  );
};

export default UserProfiles;
