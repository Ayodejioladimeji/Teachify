import React, { useContext } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "./../components/Sidebar";
import User from "./../components/Users";
import { GlobalState } from "./../../GlobalState";

const Users = () => {
  const state = useContext(GlobalState);
  const [isOpen] = state.isOpen;
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={`${isOpen ? "response" : "responsive"}`}>
        <User />
      </div>
    </div>
  );
};

export default Users;
