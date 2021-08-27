// Importing react
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import "./footer.css";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #3a7bd5 30%, #00b4d8 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #666769",
    color: "white",
    height: 58,
    padding: "0 30px",
    alignItems: "center",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div id="footer" className={classes.root}>
      <Typography>
        {" "}
        Hustle for that muscle. © 2021. All Rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
