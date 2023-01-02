import React, { useState, useEffect } from 'react';

import { FaBars } from 'react-icons/fa';
import '../styles/Tabs.css';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import Profile from './Profile';

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    setMenu(!menu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // THE SECTION OF THE STYLE MENU
  const style = {
    transform: `translate(menu ? 50% : '-50%')`,
  };

  return (
    <div className='tabcontainer'>
      <div className='tabcenter'>
        <h3>PROFILE INFORMATION</h3>
        <div className='mobiletab' onClick={() => setMenu(!menu)}>
          <FaBars />
        </div>
        {/* THE SECTIO OF THE TABS */}
        <div
          className='bloctabs'
          id={menu ? 'bloctabs' : 'none'}
          onClick={() => setMenu(!menu)}
          style={style}
        >
          <button
            className={toggleState === 1 ? 'tabs activetabs' : 'tabs'}
            onClick={() => toggleTab(1)}
          >
            Profile
          </button>

          <button
            className={toggleState === 2 ? 'tabs activetabs' : 'tabs'}
            onClick={() => toggleTab(2)}
          >
            Edit Profile
          </button>

          <button
            className={toggleState === 3 ? 'tabs activetabs' : 'tabs'}
            onClick={() => toggleTab(3)}
          >
            Change Password
          </button>
        </div>

        {/* THE SECTION OF THE CONTENT */}
        <div className='contenttabs'>
          <div
            className={toggleState === 1 ? 'content activecontent' : 'content'}
          >
            <Profile />
          </div>

          <div
            className={toggleState === 2 ? 'content activecontent' : 'content'}
          >
            <EditProfile />
          </div>

          <div
            className={toggleState === 3 ? 'content activecontent' : 'content'}
          >
            <ChangePassword />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
