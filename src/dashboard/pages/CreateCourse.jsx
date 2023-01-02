import React, { useContext } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from './../components/Sidebar';
// import CreateCourses from './../components/CreateCourse';
import { GlobalState } from './../../GlobalState';
import { MultiStepForm } from '../create/MultiStepForm';

const CreateCourse = () => {
  const state = useContext(GlobalState);
  const [isOpen] = state.isOpen;
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={`${isOpen ? 'response' : 'responsive'}`}>
        {/* <CreateCourses /> */}
        <MultiStepForm />
      </div>
    </div>
  );
};

export default CreateCourse;
