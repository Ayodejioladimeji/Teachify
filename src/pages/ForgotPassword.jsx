import React from 'react';
import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import Forgot from './../components/forgot/ForgotPassword';
import SEO from './../SEO/SEO';

const ForgotPassword = () => {
  return (
    <div>
      <SEO title='Forgot Password' />
      <Header />
      <Forgot />
      <Footer />
    </div>
  );
};

export default ForgotPassword;
