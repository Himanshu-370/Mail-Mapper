import React from "react";
import AuthenticationButton from "./AuthenticationButton";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">MM.</div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="">
              Ho<span className="word-bg">me</span>
            </a>
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
