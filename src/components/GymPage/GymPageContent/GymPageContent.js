import CustomizedAccordions from "../Accordian/Accordian";
import Rating from "../Rating/Rating";

const GymPageContent = ({ gym }) => {
  const { name, rating, imageURL, ...rest } = gym;

  return (
    <div className="main-container">
      <div className="image-container">
        <img src={imageURL} alt={name} height="350" className="image" />
      </div>
      <div className="about-container">
        <h1 className="title">{name}</h1>
        <div className="info-container">
          <Rating rating={rating} />
          <div className="accordian">
            <CustomizedAccordions gym={rest} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymPageContent;
