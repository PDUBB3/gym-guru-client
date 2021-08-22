// Importing react
import React from "react";
import { useUserContext } from "../../context/UserContext";
import Logo from "../../assets/img/gym-guru-whitebg-nav-logo.png";

import "./Navbar.css";

const Navbar = (props) => {
  const { state, dispatch } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div id="nav-container">
      <nav className="navbar">
        <img
          className="navlogo"
          src={Logo}
          alt="gym-guru-logo"
          width="60"
          height="50"
        />{" "}
        <div id="nav-item-container">
          <a className="navbarLink" href="/">
            Home
          </a>
        </div>
        {state.user && (
          <>
            <div id="nav-item-container">
              <a className="navbarLink" href={state.user.username}>
                My Profile
              </a>
            </div>
            <div id="nav-item-container">
              <a className="navbarLink" href="/findbuddies">
                Buddies
              </a>
            </div>
          </>
        )}
        {!state.user && (
          <>
            <div id="nav-item-container">
              <a className="navbarLink" href="/login">
                Login
              </a>
            </div>
            <div id="nav-item-container">
              <a className="navbarLink" href="/signup">
                Signup
              </a>
            </div>
          </>
        )}
        <div id="nav-item-container">
          <a className="navbarLink" href="/gyms">
            Gyms
          </a>
        </div>
        {state.user && (
          <>
            <div id="nav-item-container">
              <a className="navbarLink" onClick={handleLogout}>
                Logout
              </a>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

// Exporting Navbar Component
export default Navbar;
