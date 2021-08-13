import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = () => {
  <div>
    {(rating === 10 && (
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span className="rating">{rating}/10</span>
      </div>
    )) ||
      (rating >= 8 && (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <span className="rating">{rating}/10</span>
        </div>
      )) ||
      (rating >= 6 && (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <span className="rating">{rating}/10</span>
        </div>
      )) ||
      (rating >= 3 && (
        <div>
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <span className="rating">{rating}/10</span>
        </div>
      )) ||
      (rating >= 1 && (
        <div>
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <span className="rating">{rating}/10</span>
        </div>
      )) ||
      (rating === 0 && (
        <div>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <span className="rating">{rating}/10</span>
        </div>
      ))}
  </div>;
};

export default Rating;
