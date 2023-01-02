import React, { useContext } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from './../components/Sidebar';
import EnrolledCourses from './../components/EnrolledCourses';
import { GlobalState } from './../../GlobalState';

const Courses = () => {
  const state = useContext(GlobalState);
  const [isOpen] = state.isOpen;
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={`${isOpen ? 'response' : 'responsive'}`}>
        <EnrolledCourses />
      </div>
    </div>
  );
};

export default Courses;
