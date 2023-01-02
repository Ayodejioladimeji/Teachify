import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/topbar.css';
import { MenuOpen } from '@material-ui/icons';
import logo from '../../assets/brand.png';
import { GlobalState } from './../../GlobalState';

const Topbar = () => {
  const state = useContext(GlobalState);
  const [user] = state.userApi.user;
  const { openSidebar } = state;

  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>

          <button onClick={openSidebar} className='topbar-toggle'>
            <MenuOpen className='topbar-i' />
          </button>
        </div>

        <div className='topRight'>
          <img src={user.avatar} alt='' className='topAvatar' />
        </div>
      </div>
    </div>
  );
};
export default Topbar;
