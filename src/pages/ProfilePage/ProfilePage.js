import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { useUserContext } from "../../context/UserContext";

import { BUDDIES_QUERY, USER_QUERY } from "../../graphql/queries";

import ProfilePageContent from "../../components/ProfilePage/ProfilePageContent";

import "./ProfilePage.css";
import { Box } from "@material-ui/core";
import Loader from "react-loader-spinner";

const ProfilePage = () => {
  const { username } = useParams();
  const { state } = useUserContext();

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { username },
  });

  const {
    loading: buddyRequestsLoading,
    error: buddyRequestsError,
    data: buddyRequestsData,
  } = useQuery(BUDDIES_QUERY, {
    variables: { recipientId: state.user.id, status: "PENDING" },
  });

  if (loading || buddyRequestsLoading) {
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

  if (error) {
    return <div>error</div>;
  }

  if (!data?.findUser) {
    return <div>error no data</div>;
  }

  return (
    <div>
      <ProfilePageContent
        user={data.findUser}
        currentUser={state.user}
        buddyRequestsData={buddyRequestsData.getBuddies}
      />
    </div>
  );
};

export default ProfilePage;
