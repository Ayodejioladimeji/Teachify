// import React, { useState, useEffect } from 'react';
// import Loader from 'react-loader-spinner';
import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import Views from './../components/views/Views';
import SEO from './../SEO/SEO';

const View = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // });

  // if (loading) {
  //   return (
  //     <div className='load'>
  //       <Loader type='Circles' color='#00B87C' height={54} width={54} />
  //     </div>
  //   );
  // }
  return (
    <div>
      <SEO title='Course Player' />
      <Header />
      <Views />
      <Footer />
    </div>
  );
};

export default View;
