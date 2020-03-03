import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink exact to="/" className="myButton">
        Home
      </NavLink>
      {" | "}
      <NavLink to="favs" className="myButton">
        Favs
      </NavLink>
    </nav>
  );
};

export default Navbar;
