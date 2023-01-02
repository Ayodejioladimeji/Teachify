import React, { useState, useContext } from "react";
import { ArrowBack } from "@material-ui/icons";

import profileImage from "../assets/female.png";
import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";
import Topbar from "./../components/Topbar";
import { GlobalState } from "./../../GlobalState";

const EditProfile = () => {
  const state = useContext(GlobalState);
  const [isOpen] = state.isOpen;
  const [buttonLoading] = useState();
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className={`${isOpen ? "response" : "responsive"}`}>
        <div className="admin_view">
          <div className="view-top">
            <h5>Edit user profile</h5>
            <button className="btn btn-danger">
              <ArrowBack className="action-btn" />
              Go Back
            </button>
          </div>
          <div className="profiling">
            {/* <Toaster position="top-center" reverseOrder={false} /> */}
            <div className="card mb-3 profile-center">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={profileImage}
                    className="img-thumbnail h-100 rounded-start"
                    alt="..."
                  />
                </div>

                <div className="col-md-8 row g-3 justify-content-center">
                  <div className="col-md-6">
                    <label htmlFor="fullname" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullname"
                      name="fullname"
                      // value={user.fullname}
                      // onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      // value={user.email}
                      // onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      // value={user.phone}
                      // onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      name="gender"
                      // value={user.gender}
                      // onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="message" className="form-label">
                      Bio
                    </label>
                    <textarea className="form-control" id="message"></textarea>
                  </div>

                  <div className="col-md-12 admin_edit">
                    <label for="topic" className="form-label">
                      Change user type
                    </label>
                    <select id="topic" className="form-select">
                      <option selected>user type</option>
                      <option>Admin</option>
                      <option>Instructor</option>
                      <option>User</option>
                    </select>
                  </div>

                  <div className="col-12 mb-4 profile-button">
                    <button
                      // onClick={handleProfile}
                      type="submit"
                      className="btn mt-3 py-2 w-100"
                    >
                      {buttonLoading ? (
                        <div
                          style={{ width: "2rem", height: "2rem" }}
                          className="text-white spinner-border "
                          role="status"
                        >
                          <span className="sr-only text-white"></span>
                        </div>
                      ) : (
                        "EDIT USER PROFILE"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
