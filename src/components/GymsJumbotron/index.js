import { makeStyles } from "@material-ui/core/styles";

import "./GymsJumbotron.css";

const useStyles = makeStyles((theme) => ({
  gymHeaderContainer: {
    height: "45vh",
    maxWidth: "100vw",
    opacity: "0.95",
    backgroundRepeat: "no-repeat",
    background: `linear-gradient(
        to left,
        #2f2f2f 33%,
        #00ff0000 100%
      ),
      url("https://images.unsplash.com/photo-1590239926044-4131f5d0654d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8MHwwfGJsYWNrX2FuZF93aGl0ZXw%3D&auto=format&fit=crop&w=1000&q=60")`,
    [theme.breakpoints.up("xs")]: {
      background: "#2f2f2f",
    },
    [theme.breakpoints.up("sm")]: {
      background: `linear-gradient(
        to left,
        #2f2f2f 55%,
        #00ff0000 100%
      ),
      url("https://images.unsplash.com/photo-1590239926044-4131f5d0654d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8MHwwfGJsYWNrX2FuZF93aGl0ZXw%3D&auto=format&fit=crop&w=800&q=60")`,
    },
  },
  h1GymHeaderContainer: {
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
  h1GymHeader: {
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
      fontSize: "3.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem",
      marginTop: "1.5rem",
    },
  },
  h2GymHeaderContainer: {
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
  h2GymHeaderBlue: {
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
  h2GymHeaderWhite: {
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

const GymsJumbotron = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.gymHeaderContainer}>
      <div className={classes.h1GymHeaderContainer}>
        <h1 className={classes.h1GymHeader}>Find Gyms</h1>
      </div>
      <div className={classes.h2GymHeaderContainer}>
        <h2 className={classes.h2GymHeaderWhite}>A Place For</h2>
        <h2 className={classes.h2GymHeaderBlue}>Goals & </h2>{" "}
        <h2 className={classes.h2GymHeaderWhite}> Gains </h2>
      </div>
    </div>
  );
};

export default GymsJumbotron;
