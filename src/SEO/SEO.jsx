import React from 'react';
import { Helmet } from 'react-helmet';
import image from './branding.png';
import Favicon from './branding.png';

const SEO = ({ title }) => {
  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | Teachify`}>
      <meta
        name='description'
        content='Teachify is a platform where students will learn a particular available course at a time and after
        completing the course, student will be eligible for online assessment and after completing the exam,
        a completion certificate will be automatically generated.'
      />
      <meta name='image' content={image} />
      <link rel='shortcut icon' href={Favicon} />
    </Helmet>
  );
};

export default SEO;
