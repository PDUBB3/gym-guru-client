import "./BuddiesJumbotron.css";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buddiesHeaderContainer: {
    height: "45vh",
    maxWidth: "100vw",
    opacity: "0.95",
    backgroundRepeat: "no-repeat",
    background: `linear-gradient(
        to left,
        #2f2f2f 33%,
        #00ff0000 100%
      ),
      url("https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60")`,
    [theme.breakpoints.up("xs")]: {
      background: "#2f2f2f",
    },
    [theme.breakpoints.up("sm")]: {
      background: `linear-gradient(
        to left,
        #2f2f2f 35%,
        #00ff0000 100%
      ),
      url("https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60")`,
    },
  },
  h1BuddiesHeaderContainer: {
    marginBottom: "2rem",
    marginRight: "2rem",
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "2rem",
      justifyContent: "center",
      marginRight: "0rem",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
      marginTop: "1rem",
      justifyContent: "flex-end",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem",
    },
  },
  h1BuddiesHeader: {
    marginTop: "2rem",
    textDecoration: "none",
    borderBottom: "2px solid #00b4d8",
    fontSize: "4rem",
    color: "white",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.5rem",
      marginTop: "1rem",
      justifySelf: "center",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      marginTop: "1rem",
      justifySelf: "center",
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
  h2BuddiesHeaderContainer: {
    marginRight: "4rem",
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "center",
    [theme.breakpoints.down("xs")]: {
      marginRight: "0.5rem",
      marginTop: "2rem",
      justifyContent: "center",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "3rem",
      marginTop: "2rem",
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: "4rem",
      marginTop: "2rem",
      flexDirection: "row",
    },
  },
  h2BuddiesHeaderBlue: {
    color: "#00b4d8",
    padding: "0.25rem",
    fontSize: "1.75rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.35rem",
      marginLeft: "0.05rem",
      marginRight: "0.05rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.75rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
  },
  h2BuddiesHeaderWhite: {
    color: "white",
    padding: "0.25rem",
    fontSize: "1.75rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.35rem",
      marginLeft: "0.05rem",
      marginRight: "0.05rem",
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

const BuddiesJumbotron = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.buddiesHeaderContainer}>
      <div className={classes.h1BuddiesHeaderContainer}>
        <h1 className={classes.h1BuddiesHeader}>Find Buddies</h1>
      </div>
      <div className={classes.h2BuddiesHeaderContainer}>
        <h2 className={classes.h2BuddiesHeaderBlue}>Workouts Are</h2>
        <h2 className={classes.h2BuddiesHeaderWhite}>Better </h2>{" "}
        <h2 className={classes.h2BuddiesHeaderBlue}>Together</h2>
      </div>
    </div>
  );
};

export default BuddiesJumbotron;
