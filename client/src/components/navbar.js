import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/user.service";
import axios from "axios";
const NavBar = () => {
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState("");
  const handleSignout = (e) => {
    e.preventDefault();
    AuthService.logout().then(() => {
      navigate("/");
      window.location.reload();
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value.toLowerCase());
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("s", searchString);

    const url = `${process.env.REACT_APP_SERVER_URL}/search`;
    const response = await axios.get(url, { params }); //send the searchString to the api as params
    navigate("/search", { state: JSON.stringify(response.data) });
    window.location.reload();
  };

  return (
    <div className="header" data-testid="navbar-1">
      <a href="/">
        <img src="/images/logo.png" alt="logo" />
      </a>
      <div className="nav">
        <div>
          <p className="contact mx-auto fs-2">Contact Us: 1800 zhu zhu</p>
          <p className="contact mx-auto fs-5">****Free Delivery in Australia</p>
        </div>
        <a
          className="link btn wiki fs-5"
          href="https://en.wikipedia.org/wiki/ZhuZhu_Pets"
        >
          Learn More
        </a>
        <a className="link btn" href="/user/signin">
          <img src="/images/signin.png" alt="signin" />
        </a>
        <a className="link btn" href="/user/signup">
          <img src="/images/signup.png" alt="signup" />
        </a>
        <button className="link btn" onClick={handleSignout}>
          <img src="/images/signout.png" alt="signout" />
        </button>
        <a className="link btn" href="/cart">
          <img src="/images/cart.png" alt="cart" />
        </a>
      </div>
      <img src="/images/zhuzhu.png" className="pet-logo" alt="pet logo" />
      <div className="search-wrapper input-group mb-2">
        <input
          className="form-control"
          type="search"
          placeholder="Type the name of the zhu zhu e.g. Dezel"
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button
            className="search-button btn btn-outline-info"
            type="button"
            onClick={handleSearch}
          >
            <img src="/images/search.png" alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
