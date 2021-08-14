import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="about-container">
      <img
        src="https://techcrunch.com/wp-content/uploads/2019/07/Bob-Smith_portrait-1.jpg"
        alt="profile"
        height="200"
        width="200"
        className="profile-image"
      />
      <h1>Bob Smith</h1>
      <div className="bio">
        <div className="city">London</div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
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
