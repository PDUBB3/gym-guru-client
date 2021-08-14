import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PeopleIcon from "@material-ui/icons/People";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: "0px 0px 20px #00b4d8",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const GymCard = ({
  imageURL,
  name,
  postCode,
  address,
  city,
  contactNumber,
  openingTimes,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={name} style={{ wordWrap: "break-word" }} />
      <CardMedia className={classes.media} image={imageURL} title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {address} <br />
          {city} <br />
          {postCode}
          <br />
          {contactNumber}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="people icon">
          <PeopleIcon />
        </IconButton>
        <IconButton aria-label="add icon">
          <AddIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More Info:</Typography>
          {/* {openingTimes.map((openingTimes) => {
            return <div>{openingTimes}</div>;
          })} */}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default GymCard;
