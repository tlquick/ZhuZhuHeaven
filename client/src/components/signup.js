import React, { useState } from "react";

import { isEmail } from "validator";

import AuthService from "../services/user.service";

const missing = (value) => {
  if (!value) {
    return true;
  }
};

const emailError = (value) => {
  if (!isEmail(value)) {
    alert("This is not a valid email.");
    return true;
  }
};

const usernameError = (value) => {
  if (missing(value) || value.length < 3 || value.length > 20) {
    alert("The username is required and must be between 3 and 20 characters.");
    return true;
  }
};

const passwordError = (value) => {
  if (missing(value) || value.length < 6 || value.length > 40) {
    alert("The password is required and must be between 6 and 40 characters.");
    return true;
  }
};

function formErrors(username, password, email) {
  if (passwordError(password) || usernameError(username) || emailError(email)) {
    console.log(" formErrors is true");
    return true;
  } else {
    console.log(" formErrors is false");
    return false;
  }
}

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formErrors(username, password, email)) {
      AuthService.register(username, email, password).then(
        (response) => {
          alert(response.data.message);
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
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleRegister}>
          <div>
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
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
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
              <button className="btn btn-primary btn-lg btn-block">
                Sign Up
              </button>
            </div>
          </div>

          <button style={{ display: "none" }} />
          <div className="link">
            Already registered? <a href="/user/signin">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
