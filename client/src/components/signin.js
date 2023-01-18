import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../services/user.service";

const missing = (value) => {
  if (!value) {
    alert("This field is required!");
    return true;
  }
};
function formErrors(username, password) {
  if (missing(password) || missing(username)) {
    console.log(" formErrors is true");
    return true;
  } else return false;
}
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formErrors(username, password)) {
      AuthService.login(username, password).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          alert(resMessage);
        }
      );
    }
  };

  return (
    <div>
      <div className="card card-container" data-testid="signin-1">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          <div className="form-group">
            <button className="sign-button btn btn-primary btn-lg btn-block">
              <span>Sign in</span>
            </button>
          </div>
          <button style={{ display: "none" }} />
          <div className="link">
            Not registered? <a href="/user/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
