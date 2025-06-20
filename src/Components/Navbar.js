import React from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        CoderRishi
      </Link>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/user_info">User Info</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;