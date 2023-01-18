import React from "react";
import { Link } from "react-router-dom";
import AuthenticationButton from "./AuthenticationButton";
import Profile from "./Profile";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">MailMapper.</div>
      <div className="nav-links">
        <ul>
        <li>
            <Link to="/" className="homelink">Home</Link>
          </li>
          <li>
            <Link to="/about" className="word-bg">About</Link>
          </li>
        </ul>
      </div>
      <div className="authenticationBtn">
        <AuthenticationButton />
      </div>
    </div>
  );
}

export default NavBar;
