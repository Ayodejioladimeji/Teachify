import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import RoadMap from '../components/roadMap/RoadMap';
import SEO from './../SEO/SEO';
import Loading from './../components/common/Loading';

const Roadmap = () => {
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
      <SEO title='Roadmap' />
      <Header />
      <RoadMap />
      <Footer />
    </div>
  );
};

export default Roadmap;
