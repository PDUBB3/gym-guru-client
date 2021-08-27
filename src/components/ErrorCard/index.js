import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    maxWidth: 600,
    marginTop: "3rem",
  },
  title: {
    fontSize: 14,
  },
  body: {
    textAlign: "center",
    margin: "1rem",
  },
});

const ErrorCard = ({ text }) => {
  const classes = useStyles();

  return (
    <Box m={1} display="flex" justifyContent="center">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            No {text} fitting your criteria...
          </Typography>
          <Typography variant="body2" component="p" className={classes.body}>
            Please select new criteria and search again.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ErrorCard;
