import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import Loader from 'react-loader-spinner';
import RoadMap from '../components/roadMap/RoadMap';
import SEO from './../SEO/SEO';

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
        <Loader type='Circles' color='#00B87C' height={54} width={54} />
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
