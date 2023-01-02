import React from 'react';
import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import Registers from './../components/register/Register';
import SEO from './../SEO/SEO';

const Register = () => {
  return (
    <div>
      <SEO title='Register' />
      <Header />
      <Registers />
      <Footer />
    </div>
  );
};

export default Register;
