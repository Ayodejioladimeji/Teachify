import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/header/Header';
import Loader from 'react-loader-spinner';
import Communities from './../components/communities/Communities';
import { GlobalState } from './../GlobalState';
import SEO from './../SEO/SEO';

const Community = () => {
  const state = useContext(GlobalState);
  const socket = state.userApi.socket;
  const [loading, setLoading] = useState(true);

  // The section of the loader
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
      <SEO title='Community' />
      <Header socket={socket} />
      <Communities socket={socket} />
    </div>
  );
};

export default Community;
