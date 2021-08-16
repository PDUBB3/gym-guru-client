import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const AboutSection = ({ firstName, lastName, city, bio, profileImageUrl }) => {
  return (
    <div className="user-info-container">
      <img
        src={profileImageUrl}
        alt={firstName}
        height="200"
        width="200"
        className="profile-image"
      />
      <h1>
        {firstName} {lastName}
      </h1>
      <div className="bio">
        <div className="city">{city}</div>
        <div>{bio}</div>
      </div>
      <div className="contact">
        <FaEnvelope />
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
  );
};

export default AboutSection;
