import { useMutation } from "@apollo/client";
import { Avatar, makeStyles } from "@material-ui/core";
import { FaUserCheck, FaUserMinus } from "react-icons/fa";
import {
  ACCEPTBUDDYREQUEST,
  REJECTBUDDYREQUEST,
} from "../../../graphql/mutations";
import { BUDDIES_QUERY } from "../../../graphql/queries";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const BuddyCard = ({ buddy, userId, username, currentUser }) => {
  const classes = useStyles();
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

  const onClickDelete = async () => {
    if (buddy.recipientId.id === userId) {
      await rejectBuddyRequest({
        variables: {
          rejectBuddyRequestInput: {
            recipientId: userId,
            requesterId: buddy.requesterId.id,
          },
        },
      });
    }
    await rejectBuddyRequest({
      variables: {
        rejectBuddyRequestInput: {
          recipientId: buddy.recipientId.id,
          requesterId: userId,
        },
      },
    });
  };

  const isRecipient = buddy.requesterId.username !== username;

  const buddyName = isRecipient
    ? buddy.requesterId.username
    : buddy.recipientId.username;
  const buddyCity = isRecipient
    ? buddy.requesterId.city
    : buddy.recipientId.city;
  const buddyImage = isRecipient
    ? buddy.requesterId.profileImageUrl
    : buddy.recipientId.profileImageUrl;

  console.log(buddy);

  return (
    <div>
      <div className="buddyCard">
        <div className="avatarContainer">
          {!buddyImage ? (
            <a className="buddyCardLink" href={`/profile/${buddyName}`}>
              <Avatar
                alt={buddyName}
                src="https://www.seekpng.com/png/full/966-9665317_placeholder-image-person-jpg.png"
                className={classes.large}
              />
            </a>
          ) : (
            <a className="buddyCardLink" href={`/profile/${buddyName}`}>
              <Avatar
                alt={buddyName}
                src={buddyImage}
                className={classes.large}
              />
            </a>
          )}
        </div>
        <div className="buddyInfoContainer">
          <h3>{buddyName}</h3>
          <p>City: {buddyCity}</p>
          <br></br>
          {currentUser.username === username && [
            buddy.status === "BUDDIES" && (
              <FaUserMinus onClick={onClickDelete} className="buddyIcon" />
            ),
          ]}
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
      </div>
    </div>
  );
};

export default BuddyCard;
