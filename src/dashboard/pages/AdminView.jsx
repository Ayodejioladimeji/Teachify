import React, { useContext } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from './../components/Sidebar';
import { GlobalState } from './../../GlobalState';
import ViewProfile from './../admin/ViewProfile';

const AdminView = () => {
  const state = useContext(GlobalState);
  const [isOpen] = state.isOpen;
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={`${isOpen ? 'response' : 'responsive'}`}>
        <ViewProfile />
      </div>
    </div>
  );
};

export default AdminView;
