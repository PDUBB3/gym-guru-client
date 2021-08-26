// Importing react
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import Logo from "../../assets/img/gym-guru-white.png";

import "./Navbar.css";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #3a7bd5 30%, #00b4d8 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #666769",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  const { state, dispatch } = useUserContext();
  const history = useHistory();
  const handleLogout = () => {
    history.push("/login");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div id="nav-container" className={classes.root}>
      <nav className="navbar">
        <div id="navlogo">
          <img
            src={Logo}
            width="48"
            height="40"
            className="d-inline-block "
            alt="gymguru logo"
          />
        </div>
        <div className="nav-links">
          <div id="nav-item-container">
            <a className="navbarLink" href="/">
              Home
            </a>
          </div>
          {state.user ? (
            <>
              <div id="nav-item-container">
                <a className="navbarLink" href={`/${state.user.username}`}>
                  My Profile
                </a>
              </div>
              <div id="nav-item-container">
                <a className="navbarLink" href="/findbuddies">
                  Buddies
                </a>
              </div>
              <div id="nav-item-container">
                <button
                  type="submit"
                  className="navbarLink"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
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
        </div>
      </nav>
    </div>
  );
};

// Exporting Navbar Component
export default Navbar;
