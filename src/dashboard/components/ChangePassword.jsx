import React, { useState, useContext } from "react";
import axios from "axios";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { isEmpty, isLength, isMatch } from "../../utils/Validation";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { GlobalState } from "./../../GlobalState";

const initialState = {
  password: "",
  cf_password: "",
};

const ChangePassword = () => {
  const state = useContext(GlobalState);
  // const [loading, setLoading] = state.loading;
  const [token] = state.token;
  const [buttonLoading] = useState();
  const [typePass, setTypePass] = useState();
  const [typePas, setTypePas] = useState();
  const [data, setData] = useState(initialState);

  const { password, cf_password } = data;

  // The handleChange section
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // The section updating the password
  const updatePassword = (e) => {
    e.preventDefault();

    if (isEmpty(password || cf_password))
      return setData({ ...data }, toast.error("Input cannot be empty"));

    if (isLength(password))
      return setData(
        { ...data },
        toast.error("Password must be at least 8 characters long")
      );

    if (!isMatch(password, cf_password))
      return setData({ ...data }, toast.error("password did not match"));

    try {
      axios.post(
        "/user/reset",
        { password },
        {
          headers: { Authorization: token },
        }
      );

      setData({ ...data }, toast.success("Password Updated"));
      setData({ password: "", cf_password: "" });
    } catch (err) {
      setData({ ...data }, toast.error(err.response.data.msg));
    }
  };

  // const handleSubmit = () => {
  //   if (password && cf_password) {
  //     updatePassword();
  //   }
  // };

  return (
    <div className="profiling">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="card mb-3 profile-center">
        <form onSubmit={updatePassword}>
          <div className="col-md-12 row g-3 justify-content-center">
            <div className="col-md-12 pass">
              <label htmlFor="password" className="form-label">
                New Password
              </label>
              <input
                type={typePass ? "text" : "password"}
                className="form-control"
                name="password"
                value={password}
                onChange={handleChange}
                id="password"
                placeholder="**********"
              />
              <div className="eye" onClick={() => setTypePass(!typePass)}>
                {typePass ? (
                  <VisibilityOff className="visible" />
                ) : (
                  <Visibility className="visible" />
                )}
              </div>
            </div>
            <div className="col-md-12 pass">
              <label htmlFor="cfpassword" className="form-label">
                Confirm New Password
              </label>
              <input
                type={typePas ? "text" : "password"}
                className="form-control"
                name="cf_password"
                value={cf_password}
                onChange={handleChange}
                id="cf_password"
                placeholder="**********"
              />
              <div className="eye" onClick={() => setTypePas(!typePas)}>
                {typePas ? (
                  <VisibilityOff className="visible" />
                ) : (
                  <Visibility className="visible" />
                )}
              </div>
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
                  "UPDATE PASSWORD"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
