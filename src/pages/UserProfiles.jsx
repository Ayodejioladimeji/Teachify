// import React, { useState, useEffect } from 'react';
// import Loader from 'react-loader-spinner';
import Header from '../components/header/Header';
import UserProfile from './../components/userProfile/UserProfile';
import SEO from './../SEO/SEO';

const UserProfiles = () => {
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 3500);
  //   });

  //   if (loading) {
  //     return (
  //       <div className='load'>
  //         <Loader type='Circles' color='#00B87C' height={54} width={54} />
  //       </div>
  //     );
  //   }
  return (
    <div>
      <SEO title='User Profile' />
      <Header />
      <UserProfile />
    </div>
  );
};

export default UserProfiles;
