import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Cart from "./components/cart";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element=<Home />></Route>
          <Route path="user/signup" element=<Signup />></Route>
          <Route path="user/signin" element=<Signin />></Route>
          <Route path="user/cart" element=<Cart />></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
