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

const BuddyCard = ({ data }) => {
  const classes = useStyles();

  return (
    <a className="buddyCardLink" href={`/profile/${data.username}`}>
      <div className="buddyCard">
        <div className="avatarContainer">
          <Avatar
            alt={data.username}
            src={data.profileImageUrl}
            className={classes.large}
          />
          <p>{data.username}</p>
        </div>
        <div className="buddyInfoContainer">
          <p>City: {data.city}</p>
          {data.attendingGymId ? (
            <p>Gym: {data.attendingGymId.name}</p>
          ) : (
            <p>Gym: N/A</p>
          )}
          <br></br>
          <p>
            Interests:
            {data.interests
              .map((interest, index) => {
                if (index === data.goals.length - 1) {
                  return ` ${interest}`;
                }
                return ` ${interest}, `;
              })
              .slice(0, 2)}
          </p>
          <p>
            Goals:{" "}
            {data.goals
              .map((goal, index) => {
                if (index === data.goals.length - 1) {
                  return `${goal}`;
                }
                return ` ${goal}, `;
              })
              .slice(0, 2)}
          </p>
        </div>
      </div>
    </a>
  );
};

export default BuddyCard;
