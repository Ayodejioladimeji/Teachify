import React, { useContext } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "./../components/Sidebar";
import Category from "./../components/Categories";
import { GlobalState } from "./../../GlobalState";

const Categories = () => {
  const state = useContext(GlobalState);
  const [isOpen] = state.isOpen;
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={`${isOpen ? "response" : "responsive"}`}>
        <Category />
      </div>
    </div>
  );
};

export default Categories;
