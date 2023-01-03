import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {
  MenuOpen,
  PersonAdd,
  Input,
  ArrowDropDown,
  PowerSettingsNew,
  Person,
  MenuBook,
  GroupAdd,
  PostAdd,
  School,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import icon from '../../assets/brand.png';
import './Header.css';
import { GlobalState } from './../../GlobalState';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { NotificationsNone } from '@material-ui/icons';
import { MailOutline } from '@material-ui/icons';
import Loading from './../common/Loading';

const Navbar = () => {
  const state = useContext(GlobalState);
  const socket = state.userApi.socket;
  const [isLogged] = state.userApi.isLogged;
  const [loading] = state.userApi.loading;
  const [user] = state.userApi.user;
  const [cart] = state.userApi.cart;
  const [categories] = state.categories.categories;
  const [openBar, setOpenBar] = useState(false);
  const [openNoti, setOpenNoti] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // THE SECTION OF THE LOGOUT FUNCTION
  const logoutUser = async () => {
    await axios.get('/user/logout');

    localStorage.removeItem('firstLogin');
    sessionStorage.removeItem('user');

    window.location.href = '/';
    toast.success('you just logged out');
  };

  useEffect(() => {
    if (socket === null) return null;
    socket.on('getNotification', (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  // handleRead section
  const handleRead = () => {
    setNotifications([]);
    setOpenNoti(false);
  };

  // THE SECTION THAT DISPLAYS WHEN THE USER IS LOGGED IN
  const userLink = () => {
    return (
      <ul className='main-dropdown'>
        <li className='drop-nav'>
          {/* <Link to='#'> */}
          <div className='drop-div'>
            <div className='drop-flex'>
              <div
                className='topbarIconContainer'
                onClick={() => setOpenNoti(!openNoti)}
              >
                <NotificationsNone />
                {notifications.length > 0 && (
                  <span className='topIconBadge'>{notifications.length}</span>
                )}
              </div>
              <div className='topbarIconContainer'>
                <MailOutline />
                {/* <span className='topIconBadge'>2</span> */}
              </div>

              {openNoti && notifications.length > 0 && (
                <ul className='notificate'>
                  {notifications.map((item, index) => {
                    const { senderName } = item;
                    return (
                      <Link key={index} to='/social/community'>
                        <li className='notification'>
                          {user.fullname === senderName
                            ? 'You liked your post'
                            : `${senderName} liked your post`}
                        </li>
                      </Link>
                    );
                  })}

                  <button
                    className='btn btn-primary w-100 mt-2'
                    onClick={handleRead}
                  >
                    Mark as read
                  </button>
                </ul>
              )}
            </div>

            <div className='avatar' onClick={() => setOpenBar(!openBar)}>
              <img src={user.avatar} alt='pic' />
              {cart.length === 0 ? (
                ''
              ) : (
                <span className='topIconBadge'>{cart.length}</span>
              )}
            </div>
            <ArrowDropDown className='arrow-dropdown' />
          </div>
          {/* </Link> */}
          {openBar && (
            <ul className='dropdown'>
              {/* <li> */}
              <div className='drop-header'>
                <div className='drop-left'>
                  <img src={user.avatar} alt='drop-pic' />
                  {cart.length === 0 ? (
                    ''
                  ) : (
                    <span className='topIconBadge'>{cart.length}</span>
                  )}
                </div>
                <div className='drop-right'>
                  <h5>{user.username}</h5>
                  <span>{user.email}</span>
                </div>
              </div>
              {/* </li> */}

              <Link
                to={
                  user.role === 'admin'
                    ? `/dashboards`
                    : `/dashboard/my_learning`
                }
              >
                <li>
                  <MenuBook className='top-icon' />
                  {user.role === 'admin' ? 'My Dashboard' : 'My Learning'}
                </li>
              </Link>

              {!user.authorize && (
                <Link to='/instructor/onboard'>
                  <li>
                    <School className='top-icon' />
                    Become an instructor
                  </li>
                </Link>
              )}

              <Link to='/social/community'>
                <li>
                  <GroupAdd className='top-icon' />
                  Community
                </li>
              </Link>

              <Link to='/social/community'>
                <li>
                  <PostAdd className='top-icon' />
                  Timeline
                </li>
              </Link>

              <Link to='/dashboard/profile'>
                <li>
                  <Person className='top-icon' />
                  My profile
                </li>
              </Link>

              <li onClick={logoutUser}>
                <PowerSettingsNew className='top-icon' />
                Logout
              </li>
            </ul>
          )}
        </li>
      </ul>
    );
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light py-3'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='container-fluid'>
        <Link to='/'>
          <img src={icon} alt='Teachify logo' className='header-img' />
        </Link>

        <div className='display-menu'>
          <div className='drop-flexer'>
            <div
              className='topbarIconContainer'
              onClick={() => setOpenNoti(!openNoti)}
            >
              <NotificationsNone className='badge-icon' />
              {notifications.length > 0 && (
                <span className='topIconBadge'>{notifications.length}</span>
              )}
            </div>
            <div className='topbarIconContainer'>
              <MailOutline className='badge-icon' />
              {/* <span className='topIconBadge'>2</span> */}
            </div>

            {openNoti && notifications.length > 0 && (
              <ul className='notificate'>
                {notifications.map((item, index) => {
                  const { senderName } = item;
                  return (
                    <div key={index}>
                      {isLogged ? (
                        <Link to='/social/community'>
                          <li className='notification'>
                            {user.fullname === senderName
                              ? 'You liked your post'
                              : `${senderName} liked your post`}
                          </li>
                        </Link>
                      ) : (
                        <li key={index} className='notification'>
                          {user.fullname === senderName
                            ? 'You liked your post'
                            : `${senderName} liked your post`}
                        </li>
                      )}
                    </div>
                  );
                })}

                <button
                  className='btn btn-primary w-100 mt-2'
                  onClick={handleRead}
                >
                  Mark as read
                </button>
              </ul>
            )}
          </div>

          <button
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            className='menu-btn'
          >
            <MenuOpen className='open-btn' />
          </button>
        </div>

        <div
          className='collapse navbar-collapse align-items-center justify-content-between'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <Link
                to='/'
                className='nav-link d-flex'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <MenuOpen className='menu-icon' />
                <span>Courses</span>
              </Link>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <Link to='/courses' className='dropdown-item'>
                    All Categories
                  </Link>
                </li>

                {categories.map((category) => {
                  return (
                    <Link
                      to={`/category/courses/${category._id}`}
                      key={category._id}
                    >
                      <li className='dropdown-item' key={category._id}>
                        {category.name}
                      </li>
                    </Link>
                  );
                })}
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link to='/roadmap' className='dropdown-item'>
                    Follow RoadMap
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {loading ? (
            <Loading />
          ) : (
            <>
              {isLogged
                ? userLink()
                : !loading && (
                    <div className='login-box'>
                      <Link to='/login'>
                        <Input className='login-box-icon' />
                        Login
                      </Link>
                      <Link to='/register'>
                        <PersonAdd className='login-box-icon' />
                        Signup
                      </Link>
                    </div>
                  )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
