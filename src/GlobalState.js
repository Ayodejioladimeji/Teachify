import React, { createContext, useState } from 'react';
import UserApi from './api/UserApi';
import CategoriesAPI from './api/CategoriesAPI';
import CoursesAPI from './api/CoursesAPI';
import CourseAPI from './api/CourseAPI';
import PostApi from './api/PostApi';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const loginCheck = localStorage.getItem('firstLogin');
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // OPEN THE SIDEBAR SECTION
  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openSidebars = () => {
    setOpen(!open);
  };

  // CLOSE THE SIDEBAR SECTION
  const closeSidebar = () => {
    setIsOpen(false);
  };

  const state = {
    userApi: UserApi(),
    loginCheck,
    isOpen: [isOpen, setIsOpen],
    openSidebar,
    openSidebars,
    closeSidebar,
    categories: CategoriesAPI(),
    courses: CoursesAPI(),
    course: CourseAPI(),
    post: PostApi(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
