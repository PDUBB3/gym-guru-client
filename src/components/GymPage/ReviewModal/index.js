import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

import StarRatings from "react-star-ratings";

import { ADD_REVIEW } from "../../../graphql/mutations";
import { REVIEWS_QUERY } from "../../../graphql/queries";

import "./ReviewModal.css";

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

const ReviewModal = ({ handleClose, open, updateRating }) => {
  useStyles();

  const [fullWidth] = useState(true);
  const [comment, setComment] = useState("");
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [staffRating, setStaffRating] = useState(0);
  const [facilitiesRating, setFacilitiesRating] = useState(0);

  const { id: gymId } = useParams();

  const [addReview] = useMutation(ADD_REVIEW, {
    refetchQueries: [REVIEWS_QUERY, "getReviews"],
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    updateRating();

    await addReview({
      variables: {
        addReviewInput: {
          gymId,
          categories: [
            { category: "cleanliness", rating: cleanlinessRating },
            { category: "staff", rating: staffRating },
            { category: "facilities", rating: facilitiesRating },
          ],
          comment,
        },
      },
    });

    handleClose(true);
  };

  const handleOnChange = (event) => {
    setComment(event.target.value);
  };

  const setNewRatingCleanliness = (rating) => {
    setCleanlinessRating(rating);
  };

  const setNewRatingStaff = (rating) => {
    setStaffRating(rating);
  };
  const setNewRatingFacilities = (rating) => {
    setFacilitiesRating(rating);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Dialog
          fullWidth={fullWidth}
          className="dialog-box"
          open={open}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">New Review</DialogTitle>
          <DialogContent>
            <div className="set-ratings">
              <div>
                <span className="rating-name">Cleanliness</span>
                <StarRatings
                  changeRating={setNewRatingCleanliness}
                  rating={cleanlinessRating}
                  starRatedColor="#00b4d8"
                  starSelectingHoverColor="#00b4d8"
                  starDimension="30px"
                  starSpacing="2px"
                />
              </div>
              <div>
                <span className="rating-name">Staff</span>
                <StarRatings
                  changeRating={setNewRatingStaff}
                  rating={staffRating}
                  starRatedColor="#00b4d8"
                  starSelectingHoverColor="#00b4d8"
                  starDimension="30px"
                  starSpacing="2px"
                />
              </div>
              <div>
                <span className="rating-name">Facilities</span>
                <StarRatings
                  changeRating={setNewRatingFacilities}
                  rating={facilitiesRating}
                  starRatedColor="#00b4d8"
                  starSelectingHoverColor="rgb(0,180,216)"
                  starDimension="30px"
                  starSpacing="2px"
                />
              </div>
            </div>
            <TextField
              label="Comment"
              variant="outlined"
              autoFocus
              fullWidth
              margin="dense"
              type="comment"
              value={comment}
              onChange={handleOnChange}
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
      </form>
    </div>
  );
};

export default ReviewModal;
