import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/header/Header';

import Communities from './../components/communities/Communities';
import { GlobalState } from './../GlobalState';
import SEO from './../SEO/SEO';
import Loading from './../components/common/Loading';

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
        <Loading />
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
