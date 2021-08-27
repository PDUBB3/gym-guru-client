import "./Header.css";

import { DESKTOP_BREAKPOINT } from "../../mediaQueries";
import { LARGE_DESKTOP_BREAKPOINT } from "../../mediaQueries";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core/styles";
import { FaColumns } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  HomeHeader: {
    height: "45vh",
    maxWidth: "100vw",
    opacity: "0.95",
    backgroundRepeat: "no-repeat",
    background: `linear-gradient(
        to left,
        #2f2f2f 33%,
        #00ff0000 100%
      ),
      url("https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80")`,
    [theme.breakpoints.up("xs")]: {
      background: "#2f2f2f",
    },
    [theme.breakpoints.up("sm")]: {
      background: `linear-gradient(
        to left,
        #2f2f2f 55%,
        #00ff0000 100%
      ),
      url("https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80")`,
    },
  },
  h1HeaderContainer: {
    marginBottom: "2rem",
    marginRight: "2rem",
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      paddingTop: "2rem",
      justifyContent: "center",
      marginRight: "0rem",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "1rem",
      marginBottom: "1rem",
      marginRight: "1rem",
      justifyContent: "flex-end",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem",
      marginBottom: "2rem",
      marginRight: "2rem",
    },
  },
  h1HomeHeader: {
    marginTop: "2rem",
    textDecoration: "none",
    borderBottom: "2px solid #00b4d8",
    fontSize: "4rem",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      marginTop: "1rem",
      justifySelf: "center",
      textAlign: "center",
      marginRight: "0rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
      marginTop: "1rem",
      justifySelf: "flex-end",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem",
      marginTop: "1.5rem",
    },
  },
  h2HeaderContainer: {
    marginRight: "4rem",
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "center",
    [theme.breakpoints.down("xs")]: {
      marginRight: "1rem",
      marginTop: "2rem",
      flexDirection: "column",
      justifySelf: "flex-end",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "4rem",
      marginTop: "2rem",
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: "5rem",
      marginTop: "2rem",
    },
  },
  h2HomeHeaderBlue: {
    color: "#00b4d8",
    padding: "0.25rem",
    fontSize: "1.75rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.5rem",
      marginLeft: "0.1rem",
      marginRight: "0.1rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.75rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
  },
  h2HomeHeaderWhite: {
    color: "white",
    padding: "0.25rem",
    fontSize: "1.75rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.5rem",
      marginLeft: "0.2rem",
      marginRight: "0.2rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.75rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
  },
  center: {
    padding: "16px",
    textAlign: "center",
  },
  closeButton: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 0,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.HomeHeader}>
      <div className={classes.h1HeaderContainer}>
        <h1 className={classes.h1HomeHeader}>Welcome to Gym Guru</h1>
      </div>
      <div className={classes.h2HeaderContainer}>
        <h2 className={classes.h2HomeHeaderBlue}>Find Gyms. </h2>
        <h2 className={classes.h2HomeHeaderWhite}>Rate Gyms. </h2>{" "}
        <h2 className={classes.h2HomeHeaderBlue}>Find Buddies.</h2>
      </div>
    </div>
  );
};

export default Header;
