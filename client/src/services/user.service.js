import axios from "axios";

const register = (username, email, password) => {
  console.log(`${process.env.REACT_APP_SERVER_URL}/user/signup`);
  return axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, {
    username,
    email,
    password,
    roles: ["user"],
  });
};

const login = (username, password) => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/user/signin`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/user/signout`)
    .then((response) => {
      return response.data;
    });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
