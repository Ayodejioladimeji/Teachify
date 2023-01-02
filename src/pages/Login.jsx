import React from 'react';
import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import LoginUser from './../components/register/Login';
import SEO from './../SEO/SEO';

const Login = () => {
  return (
    <div>
      <SEO title='Login' />
      <Header />
      <LoginUser />
      <Footer />
    </div>
  );
};

export default Login;
