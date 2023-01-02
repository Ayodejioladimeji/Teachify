import React, { useContext } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "./../components/Sidebar";
import Tab from "./../components/Tab";
import { GlobalState } from "./../../GlobalState";

const Profile = () => {
  const state = useContext(GlobalState);
  const [isOpen] = state.isOpen;
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={`${isOpen ? "response" : "responsive"}`}>
        <Tab />
      </div>
    </div>
  );
};

export default Profile;
