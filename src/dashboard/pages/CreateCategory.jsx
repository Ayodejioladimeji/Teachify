import React, { useContext } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "./../components/Sidebar";
import CreateCategories from "./../components/CreateCategory";
import { GlobalState } from "./../../GlobalState";

const CreateCategory = () => {
  const state = useContext(GlobalState);
  const [isOpen] = state.isOpen;
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={`${isOpen ? "response" : "responsive"}`}>
        <CreateCategories />
      </div>
    </div>
  );
};

export default CreateCategory;
