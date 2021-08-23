import { useMutation } from "@apollo/client";
import FormDialog from "../../../components/BuddyModal";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaUserPlus,
} from "react-icons/fa";

import { BUDDYREQUESTS } from "../../../graphql/mutations";

const AboutSection = ({
  firstName,
  lastName,
  city,
  bio,
  profileImageUrl,
  facebookUrl,
  twitterUrl,
  instagramUrl,
  username,
  id,
  currentUser,
  buddiesData,
}) => {
  const [sendBuddyRequest] = useMutation(BUDDYREQUESTS, {
    onError: (error) => {
      console.log(error);
    },
  });

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onClick = async () => {
    await sendBuddyRequest({
      variables: {
        buddyRequestsInput: {
          requesterId: currentUser.id,
          recipientId: id,
        },
      },
    });
  };

  return (
    <div className="user-info-container">
      <div className="background">
        <img
          src={
            profileImageUrl ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
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
        {currentUser.username !== username && [
          buddiesData.find(
            (buddy) => buddy.recipientId.id === currentUser.id
          ) ||
          buddiesData.find(
            (buddy) => buddy.requesterId.id === currentUser.id
          ) ? (
            <FaEnvelope onClick={handleClickOpen} />
          ) : (
            <FaUserPlus onClick={onClick} />
          ),
        ]}
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
