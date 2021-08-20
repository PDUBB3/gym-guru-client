import StarRatings from "react-star-ratings";

import CustomizedAccordions from "../Accordian/Accordian";
import FormDialog from "../ReviewModal";

import { useState } from "react";

const GymPageContent = ({ gym, reviews }) => {
  const { name, rating, imageURL, ...rest } = gym;

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
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
                        <span className="category-name">
                          {category.category}
                        </span>
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
          <button onClick={handleClickOpen}>Add review</button>
          <FormDialog handleClose={handleClose} open={open} />
        </div>
      </div>
    </div>
  );
};

export default GymPageContent;
