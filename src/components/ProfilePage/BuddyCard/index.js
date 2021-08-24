import { useMutation } from "@apollo/client";
import { FaUserCheck, FaUserMinus } from "react-icons/fa";
import {
  ACCEPTBUDDYREQUEST,
  REJECTBUDDYREQUEST,
} from "../../../graphql/mutations";
import { BUDDIES_QUERY } from "../../../graphql/queries";

const BuddyCard = ({ buddy, userId, username }) => {
  const [acceptBuddyRequest] = useMutation(ACCEPTBUDDYREQUEST, {
    refetchQueries: [BUDDIES_QUERY, "getBuddies"],
    onError: (error) => {
      console.log(error);
    },
  });

  const [rejectBuddyRequest] = useMutation(REJECTBUDDYREQUEST, {
    refetchQueries: [BUDDIES_QUERY, "getBuddies"],
    onError: (error) => {
      console.log(error);
    },
  });

  const onClickAccept = async () => {
    await acceptBuddyRequest({
      variables: {
        acceptBuddyRequestInput: {
          recipientId: userId,
          requesterId: buddy.requesterId.id,
        },
      },
    });
  };

  const onClickReject = async () => {
    await rejectBuddyRequest({
      variables: {
        rejectBuddyRequestInput: {
          recipientId: userId,
          requesterId: buddy.requesterId.id,
        },
      },
    });
  };

  let buddyName = "";
  let buddyCity = "";
  let buddyImage = "";
  if (buddy.recipientId.username !== username) {
    buddyName = buddy.recipientId.username;
    buddyCity = buddy.recipientId.city;
    buddyImage = buddy.recipientId.profileImageUrl;
  }
  if (buddy.requesterId.username !== username) {
    buddyName = buddy.requesterId.username;
    buddyCity = buddy.requesterId.city;
    buddyImage = buddy.requesterId.profileImageUrl;
  }

  return (
    <div className="buddy-card">
      <a href={buddyName} className="buddyCardLink">
        {buddyImage === null ? (
          <img
            src="https://www.seekpng.com/png/full/966-9665317_placeholder-image-person-jpg.png"
            alt="buddy"
            height="90"
            width="90"
            className="buddy-image"
          />
        ) : (
          <img
            src={buddyImage}
            alt="buddy"
            height="90"
            width="90"
            className="buddy-image"
          />
        )}
      </a>
      <div className="buddyDetails">
        <h3>{buddyName}</h3>
        <div>{buddyCity}</div>
      </div>
      <div>
        {buddy.status === "PENDING" && (
          <div>
            <FaUserCheck
              onClick={onClickAccept}
              className="addBuddy buddyIcon"
            />
            <FaUserMinus onClick={onClickReject} className="buddyIcon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BuddyCard;
