import React, { useContext } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import { GlobalState } from '../../GlobalState';
import MyCourse from './../components/MyCourse';

const MyCourses = () => {
  const state = useContext(GlobalState);
  const [isOpen] = state.isOpen;
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={`${isOpen ? 'response' : 'responsive'}`}>
        <MyCourse />
      </div>
    </div>
  );
};

export default MyCourses;
