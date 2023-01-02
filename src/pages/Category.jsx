import React from 'react';
import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import Categories from './../components/categories/Categories';
import SEO from './../SEO/SEO';

const Category = () => {
  return (
    <div>
      <SEO title='All Categories' />
      <Header />
      <Categories />
      <Footer />
    </div>
  );
};

export default Category;
