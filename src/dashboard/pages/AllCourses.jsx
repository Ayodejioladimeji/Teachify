import React, { useContext } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import AllCourse from "../components/AllCourses";
import { GlobalState } from "./../../GlobalState";

const AllCourses = () => {
  const state = useContext(GlobalState);
  const [isOpen] = state.isOpen;
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={`${isOpen ? "response" : "responsive"}`}>
        <AllCourse />
      </div>
    </div>
  );
};

export default AllCourses;
