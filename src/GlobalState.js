import React, { createContext, useState, useEffect } from 'react';
import UserApi from './api/UserApi';
import CategoriesAPI from './api/CategoriesAPI';
import CoursesAPI from './api/CoursesAPI';
import CourseAPI from './api/CourseAPI';
import PostApi from './api/PostApi';

import axios from 'axios';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
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

  // REFRESHING THE USER TOKEN
  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');

    if (firstLogin) {
      const refreshToken = async () => {
        try {
          const res = await axios.post('/user/refresh_token');

          setToken(res.data['access_token']);

          setTimeout(() => {
            refreshToken();
          }, 10 * 60 * 1000);
        } catch (err) {
          console.log(err);
        }
      };
      refreshToken();
    }
  }, [token]);

  const state = {
    token: [token, setToken],
    userApi: UserApi(token),
    loginCheck,
    isOpen: [isOpen, setIsOpen],
    openSidebar,
    openSidebars,
    closeSidebar,
    categories: CategoriesAPI(),
    courses: CoursesAPI(),
    course: CourseAPI(),
    post: PostApi(token),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
