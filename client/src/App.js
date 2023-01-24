import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  NavBar,
  Home,
  Signin,
  Signup,
  Cart,
  Search,
  Privacy,
  Terms,
  Agreement,
  Sitemap,
  Footer,
} from "./components/main";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element=<Home />></Route>
        <Route path="user/signup" element=<Signup />></Route>
        <Route path="user/signin" element=<Signin />></Route>
        <Route path="cart" element=<Cart />></Route>
        <Route path="search" element=<Search />></Route>
        <Route path="info/privacy" element=<Privacy />></Route>
        <Route path="info/terms" element=<Terms />></Route>
        <Route path="info/agreement" element=<Agreement />></Route>
        <Route path="info/sitemap" element=<Sitemap />></Route>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
