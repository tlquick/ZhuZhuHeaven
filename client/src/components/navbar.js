import { useNavigate } from "react-router-dom";

import AuthService from "../services/user.service";
import SearchBar from "./searchbar";
const NavBar = () => {
  const navigate = useNavigate();
  const handleSignout = (e) => {
    e.preventDefault();
    AuthService.logout().then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div className="header" data-testid="navbar-1">
      <a href="/">
        <img src="/images/logo_sm.png" alt="logo" className="img-fluid" />
      </a>
      <div className="nav">
        <a
          className="link btn wiki fs-4"
          href="https://en.wikipedia.org/wiki/ZhuZhu_Pets"
        >
          Learn More
        </a>
        <a className="link btn" href="/user/signin">
          <img src="/images/signin.png" alt="signin" className="img-fluid" />
        </a>
        <a className="link btn" href="/user/signup">
          <img src="/images/signup.png" alt="signup" className="img-fluid" />
        </a>
        <button className="link btn" onClick={handleSignout}>
          <img src="/images/signout.png" alt="signout" className="img-fluid" />
        </button>
        <a className="link btn" href="/cart">
          <img src="/images/cart.png" alt="cart" className="img-fluid" />
        </a>
      </div>
      <div className="contact">
        <p className="fs-3">Contact Us: 1800 zhu zhu</p>
        <p className="fs-5">****Free Delivery in Australia</p>
      </div>
      <img
        src="/images/zhuzhu.png"
        className="pet-logo img-fluid"
        alt="pet logo"
      />
      <SearchBar />
    </div>
  );
};

export default NavBar;
