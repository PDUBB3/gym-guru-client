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
  id,
  currentUser,
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

  const isBuddy = true;

  const onClick = async () => {
    console.log(id);
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
        <FaUserPlus onClick={onClick} />
        {isBuddy && <FaEnvelope onClick={handleClickOpen} />}
        {!isBuddy && <FaUserPlus onClick={onClick} />}
        <FormDialog handleClose={handleClose} open={open} />
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
  );
};

export default AboutSection;
