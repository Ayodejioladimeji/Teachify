import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "./../components/Sidebar";
import Profile from "../admin/ViewProfile";

const AdminView = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="responsive">
        <Profile />
      </div>
    </div>
  );
};

export default AdminView;
