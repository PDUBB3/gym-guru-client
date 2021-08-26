import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const ErrorAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Something went wrong — <strong>We are working hard to fix this.</strong>
      </Alert>
    </div>
  );
};

export default ErrorAlert;
