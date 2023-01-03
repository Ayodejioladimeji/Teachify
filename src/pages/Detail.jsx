import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import Details from './../components/details/Details';
import SEO from './../SEO/SEO';
import Loading from '../components/common/Loading';

const Detail = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <SEO title='Course Details' />
      <Header />
      <Details />
      <Footer />
    </div>
  );
};

export default Detail;
