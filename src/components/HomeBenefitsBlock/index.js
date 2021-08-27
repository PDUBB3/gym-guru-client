import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import "./HomeBenefitsBlock.css";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "2rem",
    minHeight: "50vh",
    maxHeight: "50vh",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  benefitsBlock1: {
    backgroundImage: `linear-gradient(
        to bottom,
        #333533 38%,
        rgba(0, 255, 0, 0) 100%
      ),
      url("https://images.unsplash.com/photo-1445620466293-d6316372ab59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80")`,
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    maxWidth: "33%",
    marginRight: "1rem",
  },
  h2Benefits: {
    color: "#00b4d8",
    fontSize: "2rem",
    marginTop: "2rem",
  },
  benefitsP: {
    margin: "2rem",
    fontSize: "1.5rem",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
  },
  benefitsBlock2: {
    backgroundImage: `linear-gradient(
        to bottom,
        #333533 40%,
        rgba(0, 255, 0, 0) 100%
      ),
      url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")`,
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    maxWidth: "34%",
    marginRight: "1rem",
  },
  benefitsBlock3: {
    backgroundImage: `linear-gradient(
        to bottom,
        #333533 26%,
        rgba(0, 255, 0, 0) 100%
      ),
      url("https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=80")`,
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    maxWidth: "33%",
    marginRight: "1rem",
  },
}));

const HomeBenefitsBlock = (props) => {
  const classes = useStyles();

  return (
    <Box
      container
      display="flex"
      direction="column"
      className={classes.container}
      alignContent="center"
      justifyContent="spaceBetween"
    >
      <div className={classes.benefitsBlock1}>
        <h2 className={classes.h2Benefits}>Sign Up</h2>
        <p className={classes.benefitsP}>
          Join the Gym Guru family to kickstart your fitness journey
        </p>
      </div>
      <div className={classes.benefitsBlock2}>
        <h2 className={classes.h2Benefits}>Find Gyms</h2>
        <p className={classes.benefitsP}>
          Find a new fitness hub or rate your favourite gym
        </p>
      </div>
      <div className={classes.benefitsBlock3}>
        <h2 className={classes.h2Benefits}>Find Buddies</h2>
        <p className={classes.benefitsP}>
          Connect with new friends to smash those goals together
        </p>
      </div>
    </Box>
  );
};

export default HomeBenefitsBlock;
