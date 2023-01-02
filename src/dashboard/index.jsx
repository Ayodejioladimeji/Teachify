import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardHome from './pages/Home';

const index = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <DashboardHome />
    </div>
  );
};

export default index;
