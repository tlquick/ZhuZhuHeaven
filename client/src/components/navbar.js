import { useNavigate } from "react-router-dom";
import AuthService from "../services/user.service";
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
    <div className="header">
      <a href="/">
        <img src="/images/logo.png" alt="logo" />
      </a>
      <div className="nav">
        <a className="link " href="/user/signin">
          Sign In
        </a>
        <a className="link " href="/user/signup">
          Sign Up
        </a>
        <button className="link " onClick={handleSignout}>
          Sign Out
        </button>
        <a className="link " href="/user/cart">
          Cart
        </a>
      </div>
      <div className="search-wrapper">
        <input type="search" id="search" placeholder="Search" />
        <button>Go</button>
      </div>
    </div>
  );
};

export default NavBar;
