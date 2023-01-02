import React from 'react';
import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';
import Hero from './../components/hero/Hero';
import Hero2 from '../components/hero2/Hero2';
import Why from '../components/why/Why';
import Own from '../components/own/Own';
import FavouriteCourse from '../components/hero4/FavouriteCourse';
import NewCourses from './../components/hero5/NewCourses';
import FeaturedCourses from './../components/hero6/FeaturedCourses';
import Starts from './../components/starts/Starts';
import Mobile from './../components/mobile/Mobile';
import SEO from './../SEO/SEO';

const Home = () => {
  return (
    <div>
      <SEO title='Homepage' />
      <Header />
      <Hero />
      <Starts />
      <Why />
      <Hero2 />
      <NewCourses />
      <FavouriteCourse />
      <Own />
      <FeaturedCourses />
      <Mobile />
      <Footer />
    </div>
  );
};

export default Home;
