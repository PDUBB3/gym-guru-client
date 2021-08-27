import { useState } from "react";

import StarRatings from "react-star-ratings";
import ReviewModal from "../ReviewModal";

import { useUserContext } from "../../../context/UserContext";

const Reviews = ({ reviews, rating, updateRating, gymId }) => {
  const [open, setOpen] = useState(false);

  const { state } = useUserContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <div className="overall-rating">{rating}</div>
        <StarRatings
          rating={rating}
          numberOfStars={5}
          starRatedColor="#00b4d8"
          starDimension="30px"
          starSpacing="3px"
        />
      </div>
      <div>
        {reviews.map((review) => {
          return (
            <div className="reviews">
              <div className="ratings">
                {review.categories.map((category) => {
                  return (
                    <div className="review">
                      <span className="category-name">{category.category}</span>
                      <StarRatings
                        rating={category.rating}
                        numberOfStars={5}
                        starRatedColor="#00b4d8"
                        starDimension="20px"
                        starSpacing="3px"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="comment">{review.comment}</div>
            </div>
          );
        })}
        {state.user && [
          state.user.ownedGymId !== gymId && (
            <button onClick={handleClickOpen}>Add review</button>
          ),
        ]}
        <ReviewModal
          handleClose={handleClose}
          open={open}
          updateRating={updateRating}
        />
      </div>
    </div>
  );
};

export default Reviews;
