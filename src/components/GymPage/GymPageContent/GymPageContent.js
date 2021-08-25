import StarRatings from "react-star-ratings";
import { useMutation } from "@apollo/client";

import { UPDATE_GYM_RATING } from "../../../graphql/mutations";
import { GYM_QUERY } from "../../../graphql/queries";

import CustomizedAccordions from "../Accordian/Accordian";

import Reviews from "../Reviews";
import { Box, Button, Container } from "@material-ui/core";

const GymPageContent = ({ gym, reviews, user }) => {
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
            <Button variant="contained" disableElevation>
              Edit
            </Button>
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
