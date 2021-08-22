import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaUserPlus,
} from "react-icons/fa";
import FormDialog from "../../../components/BuddyModal";
import { useState } from "react";

const AboutSection = ({
  firstName,
  lastName,
  city,
  bio,
  profileImageUrl,
  facebookUrl,
  twitterUrl,
  instagramUrl,
}) => {
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
        {facebookUrl && (
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        )}
        {twitterUrl && (
          <a href={twitterUrl} target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        )}
        {instagramUrl && (
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
