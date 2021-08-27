import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import "./HomeBenefitsBlock.css";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "2rem",
    minHeight: "50vh",
    maxHeight: "50vh",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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
      <div className="benefits-block-1">
        <h2 className="h2-benefits">Sign Up</h2>
        <p className="benefits-p">
          Join the Gym Guru family to kickstart your fitness journey
        </p>
      </div>
      <div className="benefits-block-2">
        <h2 className="h2-benefits">Find Gyms</h2>
        <p className="benefits-p">
          Find a new fitness hub or rate your favourite gym
        </p>
      </div>
      <div className="benefits-block-3">
        <h2 className="h2-benefits">Find Buddies</h2>
        <p className="benefits-p">
          Connect with new friends to smash those goals together
        </p>
      </div>
    </Box>
  );
};

export default HomeBenefitsBlock;
