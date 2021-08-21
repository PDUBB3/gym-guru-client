// Importing react
import React from "react";
import Logo from "../../assets/img/white-bg-logo.png";
import { useUserContext } from "../../context/UserContext";

import "./Navbar.css";

const Navbar = (props) => {
  const { state, dispatch } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

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
