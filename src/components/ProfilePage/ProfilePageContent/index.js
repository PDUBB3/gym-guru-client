import AboutSection from "../AboutSection";
import InfoSection from "../InfoSection";

import { BUDDIES_QUERY } from "../../../graphql/queries";
import { useQuery } from "@apollo/client";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

import Fade from "@material-ui/core/Fade";

import { Box, Button, Container, makeStyles } from "@material-ui/core";

import Loader from "react-loader-spinner";
import { useState } from "react";
import SignupAccordian from "../../SignUpAccordion";

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

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  if (buddiesLoading) {
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
        <Box m={1}>
          <Button
            variant="contained"
            disableElevation
            type="button"
            onClick={handleOpen}
          >
            Edit
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
