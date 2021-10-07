import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1>SocialMedia</h1>
      </div>
      <div className="navbar__items">
        <NavLink to="/">Feed</NavLink>
        <NavLink to="/profile">My profile</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
