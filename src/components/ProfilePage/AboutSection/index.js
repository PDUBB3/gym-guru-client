import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaUserPlus,
} from "react-icons/fa";
import FormDialog from "../../../components/BuddyModal";
import { useState } from "react";

const AboutSection = ({ firstName, lastName, city, bio, profileImageUrl }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const isBuddy = true;

  return (
    <div className="user-info-container">
      <div className="background">
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
      </div>
      <div className="bio">
        <div className="city">{city}</div>
        <div>{bio}</div>
      </div>
      <div className="contact">
        {isBuddy && <FaEnvelope onClick={handleClickOpen} />}
        {!isBuddy && <FaUserPlus />}
        <FormDialog handleClose={handleClose} open={open} />
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
  );
};

export default AboutSection;
