import {
  HomeOutlined,
  People,
  PeopleOutlined,
  PowerSettingsNew,
  Settings,
} from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <>
      <div className='list-group social mt-3'>
        <li className='list-group-item'>Network</li>
        <div className='card-body network-section'>
          <ul className='sidebarList'>
            <li>
              <NavLink
                to='/dashboard/create_courses'
                className='sidebarListItem'
                activeClassName='active'
              >
                <HomeOutlined className='sidebarIcon' />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/create_courses'
                className='sidebarListItem'
                activeClassName='active'
              >
                <People className='sidebarIcon' />
                Followers
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/create_courses'
                className='sidebarListItem'
                activeClassName='active'
              >
                <PeopleOutlined className='sidebarIcon' />
                Followings
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/create_courses'
                className='sidebarListItem'
                activeClassName='active'
              >
                <Settings className='sidebarIcon' />
                Notifications
              </NavLink>
            </li>
            <li className='sidebarListItem'>
              <PowerSettingsNew className='sidebarIcon' />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
