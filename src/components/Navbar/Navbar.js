// Importing react
import React from "react";
import Logo from "../../assets/img/white-bg-logo.png";

import "./Navbar.css";

const Navbar = (props) => {
  const isLoggedIn = false;
  return (
    <div id="nav-container">
      <img
        className="navlogo"
        src={Logo}
        alt="gym-guru-logo"
        width="80"
        height="55"
      />
      <nav className="navbar">
        {" "}
        <div id="nav-item-container">
          <a href="/">Home</a>
        </div>
        {isLoggedIn && (
          <>
            <div id="nav-item-container">
              <a href="/:username">My Profile</a>
            </div>
            <div id="nav-item-container">
              <a href="/findbuddies">Buddies</a>
            </div>
          </>
        )}
        {!isLoggedIn && (
          <>
            <div id="nav-item-container">
              <a href="/login">Login</a>
            </div>
            <div id="nav-item-container">
              <a href="/signup">Signup</a>
            </div>
          </>
        )}
        <div id="nav-item-container">
          <a href="/gyms">Gyms</a>
        </div>
      </nav>
    </div>
  );
};

// Exporting Navbar Component
export default Navbar;
