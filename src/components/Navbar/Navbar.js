import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { useUserContext } from "../../context/UserContext";

import { MOBILE_BREAKPOINT } from "../../mediaQueries";

const useStyles = makeStyles(() => ({
  navbar: {
    background: "linear-gradient(45deg, #3a7bd5 30%, #00b4d8 90%)",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { state, dispatch } = useUserContext();
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    history.push("/login");
  };

  const renderMenuItems = () => (
    <>
      <Button
        disableElevation
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </Button>
      <Button
        disableElevation
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() => {
          history.push("/gyms");
        }}
      >
        Gyms
      </Button>
    </>
  );

  const renderLoginSignUp = () => (
    <>
      <Button
        disableElevation
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() => {
          history.push("/login");
        }}
      >
        Login
      </Button>
      <Button
        disableElevation
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() => {
          history.push("/signup");
        }}
      >
        Signup
      </Button>
    </>
  );

  const renderPrivateMenuItems = () => (
    <>
      <Button
        disableElevation
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() => {
          history.push(`/profile/${state.user.username}`);
        }}
      >
        My Profile
      </Button>
      <Button
        disableElevation
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() => {
          history.push("/findbuddies");
        }}
      >
        Buddies
      </Button>
      <Button
        disableElevation
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </>
  );

  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Grid
            container
            direction={isMobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
          >
            {renderMenuItems()}
            {state.user ? renderPrivateMenuItems() : renderLoginSignUp()}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
