import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import "./BuddyCard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const BuddyCard = () => {
  const classes = useStyles();

  return (
    <div className="buddyCard">
      <div className="avatarContainer">
        <Avatar
          alt="Leon Wheeler"
          src="https://techcrunch.com/wp-content/uploads/2019/07/Bob-Smith_portrait-1.jpg"
          className={classes.large}
        />
        <p>Leon Wheeler</p>
      </div>
      <div className="buddyInfoContainer">
        <p>City: Birmingham</p>
        <p>Gym: PureGym</p>
        <br></br>
        <p>Interests: Biking</p>
        <p>Goals: Lose Weight</p>
      </div>
    </div>
  );
};

export default BuddyCard;
