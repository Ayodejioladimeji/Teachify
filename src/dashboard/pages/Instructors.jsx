import React, { useContext } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from './../components/Sidebar';
import { GlobalState } from './../../GlobalState';
import Instructor from './../components/Instructor';

const Instructors = () => {
  const state = useContext(GlobalState);
  const [isOpen] = state.isOpen;
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={`${isOpen ? 'response' : 'responsive'}`}>
        <Instructor />
      </div>
    </div>
  );
};

export default Instructors;
