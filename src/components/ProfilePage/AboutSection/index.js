import { useMutation } from "@apollo/client";
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

  console.log(currentUser);

  const requesterId = "611e9627c79841171c472906";
  // This will be the logged in user ID from context

  const onClick = async () => {
    console.log(id);
    await sendBuddyRequest({
      variables: {
        buddyRequestsInput: {
          requesterId,
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
        <FaEnvelope />
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
  );
};

export default AboutSection;
