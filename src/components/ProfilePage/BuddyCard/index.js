import { useMutation } from "@apollo/client";
import { FaUserCheck } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { ACCEPTBUDDYREQUEST } from "../../../graphql/mutations";

const BuddyCard = ({ buddy, userId, username }) => {
  const [acceptBuddyRequest] = useMutation(ACCEPTBUDDYREQUEST, {
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

    <Redirect to="/" />;
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
        {buddy.status === "PENDING" && <FaUserCheck onClick={onClickAccept} />}
      </div>
    </div>
  );
};

export default BuddyCard;
