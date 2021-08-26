import { useState } from "react";
import StarRatings from "react-star-ratings";
import { useMutation } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Button, Container } from "@material-ui/core";

import { UPDATE_GYM_RATING } from "../../../graphql/mutations";
import { GYM_QUERY } from "../../../graphql/queries";
import CustomizedAccordions from "../Accordian/Accordian";
import Reviews from "../Reviews";
import GymForm from "../../GymForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "75%",
    maxHeight: "75%",
    overflowY: "auto",
  },
}));

const GymPageContent = ({ gym, reviews, user }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { id, name, rating, imageURL, ...rest } = gym;

  const [updateGymRating] = useMutation(UPDATE_GYM_RATING, {
    refetchQueries: [GYM_QUERY, "getGym"],
    onError: (error) => {
      console.log(error);
    },
  });

  const averageRating = () => {
    const allRatings = reviews
      .map((review) => {
        return review.categories.map((category) => {
          return category.rating;
        });
      })
      .flat();

    if (allRatings.length !== 0) {
      const totalRating = allRatings.reduce((acc, current) => {
        return acc + current;
      });

      const average = totalRating / allRatings.length;

      const rating = Math.round(average * 10) / 10;

      return rating;
    }
  };

  const updateRating = async () => {
    const updatedRating = averageRating();

    await updateGymRating({
      variables: {
        updateGymRatingInput: {
          id,
          rating: updatedRating,
        },
      },
    });
  };

  return (
    <>
      <Container maxWidth="lg">
        {user && user.ownedGymId === id && (
          <Box m={1}>
            <Button
              variant="contained"
              disableElevation
              type="button"
              onClick={handleOpen}
            >
              Edit
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <GymForm gym={gym} />
                </div>
              </Fade>
            </Modal>
          </Box>
        )}
      </Container>
      <div className="gym-container">
        <div className="image-container">
          <img src={imageURL} alt={name} height="350" className="image" />
        </div>
        <div className="about-container">
          <h1 className="title">{name}</h1>
          <div className="info-container">
            <StarRatings
              rating={rating}
              numberOfStars={5}
              starRatedColor="#00b4d8"
              starDimension="20px"
              starSpacing="3px"
            />
            <div className="accordian">
              <CustomizedAccordions gym={rest} />
            </div>
          </div>
        </div>
        <div className="review-container">
          <Reviews
            reviews={reviews}
            rating={rating}
            updateRating={updateRating}
          />
        </div>
      </div>
    </>
  );
};

export default GymPageContent;
