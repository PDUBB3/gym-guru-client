import { useMutation } from "@apollo/client";
import { FaUserCheck, FaUserMinus } from "react-icons/fa";
import {
  ACCEPTBUDDYREQUEST,
  REJECTBUDDYREQUEST,
} from "../../../graphql/mutations";

const BuddyCard = ({ buddy, userId, username }) => {
  const [acceptBuddyRequest] = useMutation(ACCEPTBUDDYREQUEST, {
    onError: (error) => {
      console.log(error);
    },
  });

  const [rejectBuddyRequest] = useMutation(REJECTBUDDYREQUEST, {
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
  if (buddy.recipientId.username !== username) {
    buddyName = buddy.recipientId.username;
    buddyCity = buddy.recipientId.city;
  }
  if (buddy.requesterId.username !== username) {
    buddyName = buddy.requesterId.username;
    buddyCity = buddy.requesterId.city;
  }

  return (
    <div className="buddy-card">
      <a href={buddyName} className="buddyCardLink">
        <img
          src="https://images.unsplash.com/photo-1488228469209-c141f8bcd723?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="buddy"
          height="90"
          width="90"
          className="buddy-image"
        ></img>
      </a>
      <h3>{buddyName}</h3>
      <div>{buddyCity}</div>
      <div>
        {buddy.status === "PENDING" && (
          <div>
            <FaUserCheck onClick={onClickAccept} className="buddyIcon" />
            <FaUserMinus onClick={onClickReject} className="buddyIcon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BuddyCard;
