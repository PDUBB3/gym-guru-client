// Importing react
import React from "react";

import "./Navbar.css";

const Navbar = (props) => {
  const isLoggedIn = false;
  return (
    <div id="nav-container">
      <nav className="navbar">
        {" "}
        <div id="nav-item-container">
          <a href="/">Home</a>
        </div>
        {isLoggedIn && (
          <>
            <div id="nav-item-container">
              <a href="/:username" target="blank">
                My Profile
              </a>
            </div>
            <div id="nav-item-container">
              <a href="/findbuddies" target="blank">
                Buddies
              </a>
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
          <a href="/gyms" target="blank">
            Gyms
          </a>
        </div>
      </nav>
    </div>
  );
};

// Exporting Navbar Component
export default Navbar;
