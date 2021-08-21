import StarRatings from "react-star-ratings";

import CustomizedAccordions from "../Accordian/Accordian";

import Reviews from "../Reviews";

const GymPageContent = ({ gym, reviews }) => {
  const { name, rating, imageURL, ...rest } = gym;

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

  return (
    <div className="gym-container">
      <div className="image-container">
        <img src={imageURL} alt={name} height="350" className="image" />
      </div>
      <div className="about-container">
        <h1 className="title">{name}</h1>
        <div className="info-container">
          {}
          <StarRatings
            rating={averageRating()}
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
        <Reviews reviews={reviews} rating={averageRating()} />
      </div>
    </div>
  );
};

export default GymPageContent;
