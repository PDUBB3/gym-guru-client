import StarRatings from "react-star-ratings";

import CustomizedAccordions from "../Accordian/Accordian";
import Rating from "../Rating/Rating";

const GymPageContent = ({ gym, reviews }) => {
  const { name, rating, imageURL, ...rest } = gym;

  console.log(reviews);

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
            starRatedColor="black"
            starDimension="20px"
            starSpacing="3px"
          />
          <div className="accordian">
            <CustomizedAccordions gym={rest} />
          </div>
        </div>
      </div>
      <div className="review-container">
        {/* <h1>Reviews</h1> */}
        <div>
          <div className="rating">{rating}</div>
          <StarRatings
            rating={rating}
            numberOfStars={5}
            starRatedColor="black"
            starDimension="30px"
            starSpacing="3px"
          />
        </div>
        <div>
          <div>
            {reviews.map((review) => {
              return (
                <div className="ratings-breakdown">
                  {review.categories.map((category) => {
                    return (
                      <div className="review">
                        <span>{category.category}</span>
                        <StarRatings
                          rating={category.rating}
                          numberOfStars={5}
                          starRatedColor="black"
                          starDimension="20px"
                          starSpacing="3px"
                        />
                      </div>
                    );
                  })}
                  <div className="comment">{review.comment}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymPageContent;
