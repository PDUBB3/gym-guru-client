import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import Loader from "react-loader-spinner";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Button, makeStyles } from "@material-ui/core";

import { BUDDIES_QUERY } from "../../../graphql/queries";
import { DELETE_USER } from "../../../graphql/mutations";

import AboutSection from "../AboutSection";
import SignupAccordian from "../../SignUpAccordion";
import InfoSection from "../InfoSection";
import { useUserContext } from "../../../context/UserContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "75%",
    maxHeight: "75%",
    overflowY: "auto",
  },
  buttons: {
    textAlign: "center",
  },
}));

const ProfilePageContent = ({ user, currentUser, buddyRequestsData }) => {
  const {
    firstName,
    lastName,
    city,
    bio,
    profileImageUrl,
    facebookUrl,
    twitterUrl,
    instagramUrl,
    ...rest
  } = user;

  const classes = useStyles();
  const history = useHistory();
  const { dispatch } = useUserContext();

  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [deleteUser, { data, error, loading }] = useMutation(DELETE_USER, {
    onCompleted: () => {
      history.push("/");
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const onClickDelete = async () => {
    await deleteUser({
      variables: {
        deleteUserId: user.id,
      },
    });
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  const {
    loading: buddiesLoading,
    error: buddiesError,
    data: buddiesData,
  } = useQuery(BUDDIES_QUERY, {
    variables: {
      recipientId: user.id,
      requesterId: user.id,
      status: "BUDDIES",
    },
  });

  if (loading || buddiesLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </Box>
    );
  }

  return (
    <>
      {user.username === currentUser.username && (
        <Box m={1} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            disableElevation
            type="button"
            onClick={handleOpen}
            style={{
              maxWidth: "170px",
              minWidth: "170px",
              margin: "1rem",
            }}
          >
            Edit Profile
          </Button>
          <Button
            variant="contained"
            disableElevation
            type="button"
            onClick={handleConfirmOpen}
            color="secondary"
            style={{ maxWidth: "170px", minWidth: "170px", margin: "1rem" }}
          >
            Delete Profile
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <SignupAccordian user={user} />
              </div>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={confirmOpen}
            onClose={handleConfirmClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={confirmOpen}>
              <div className={classes.paper}>
                <Box m={1}>
                  <h2>
                    Are you sure you want to permanently delete your profile?
                  </h2>
                  <Box m={1} className={classes.buttons}>
                    <Button
                      variant="contained"
                      disableElevation
                      type="button"
                      onClick={handleConfirmClose}
                      style={{
                        maxWidth: "170px",
                        minWidth: "170px",
                        margin: "1rem",
                      }}
                    >
                      No
                    </Button>
                    <Button
                      variant="contained"
                      disableElevation
                      type="button"
                      onClick={onClickDelete}
                      color="secondary"
                      style={{
                        maxWidth: "170px",
                        minWidth: "170px",
                        margin: "1rem",
                      }}
                    >
                      Yes
                    </Button>
                  </Box>
                </Box>
              </div>
            </Fade>
          </Modal>
        </Box>
      )}
      <div className="profile-container">
        <AboutSection
          firstName={firstName}
          lastName={lastName}
          city={city}
          bio={bio}
          profileImageUrl={profileImageUrl}
          facebookUrl={facebookUrl}
          twitterUrl={twitterUrl}
          instagramUrl={instagramUrl}
          username={user.username}
          id={user.id}
          currentUser={currentUser}
          buddiesData={buddiesData.getBuddies}
        />
        <InfoSection
          firstName={firstName}
          buddiesData={buddiesData.getBuddies}
          buddyRequestData={buddyRequestsData}
          currentUser={currentUser}
          user={rest}
        />
      </div>
    </>
  );
};

export default ProfilePageContent;
