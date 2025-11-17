import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/signup">Signup</Link> | 
    <Link to="/login">Login</Link> | 
    <Link to="/profile">Profile</Link>
  </nav>
);

export default Navbar;

