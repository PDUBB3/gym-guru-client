import { useMutation } from "@apollo/client";
import { FaUserCheck } from "react-icons/fa";
import { ACCEPTBUDDYREQUEST } from "../../../graphql/mutations";

const BuddyCard = ({ buddy, userId }) => {
  const [acceptBuddyRequest] = useMutation(ACCEPTBUDDYREQUEST, {
    onError: (error) => {
      console.log(error);
    },
  });

  console.log(userId);

  const onClickAccept = async () => {
    await acceptBuddyRequest({
      variables: {
        acceptBuddyRequestInput: {
          requesterId: buddy.id,
          recipientId: userId,
        },
      },
    });
  };

  return (
    <div className="buddy-card">
      <img
        src="https://images.unsplash.com/photo-1488228469209-c141f8bcd723?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt="buddy"
        height="90"
        width="90"
        className="buddy-image"
      ></img>
      <h3>{buddy.requesterId.username}</h3>
      <div>{buddy.requesterId.city}</div>
      <div>
        <FaUserCheck onClick={onClickAccept} />
      </div>
    </div>
  );
};

export default BuddyCard;
