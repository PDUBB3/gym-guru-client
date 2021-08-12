import "./GymCard.css";

const GymCard = (props) => {
  const { imageUrl, name, postCode, address, city, contactNumber } = props;
  return (
    <div id="container">
      <div class="gym-details">
        <h1>{name}</h1>
        <p>{address}</p>
        <p>{postCode}</p>
        <p>{city}</p>
        <p>{contactNumber}</p>
        <div className="control">
          <button class="button">
            <span>More info </span>
          </button>
        </div>
      </div>

      <div className="gym-image">
        <img src={imageUrl} alt={name} />

        <div class="info">
          <h2>Opening Times</h2>
        </div>
      </div>
    </div>
  );
};

export default GymCard;
