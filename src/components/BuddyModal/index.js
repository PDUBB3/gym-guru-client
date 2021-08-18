import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

import "./BuddyModal.css";
const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const handleSubmit = (event) => {
  event.preventDefault();
  //handle close to go inside handlesubmit fn
};

export default function FormDialog({ handleClose, open }) {
  useStyles();

  const [fullWidth] = React.useState(true);

  return (
    <div>
      <Dialog
        fullWidth={fullWidth}
        className="dialog-box"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">New Message</DialogTitle>
        <DialogContent>
          <DialogContentText className="dialog-box">
            Write a message to your buddy here:
          </DialogContentText>
          <TextField
            id="filled-full-width"
            label="Message"
            variant="outlined"
            autoFocus
            fullWidth
            margin="dense"
            type="message"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
