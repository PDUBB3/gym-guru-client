import { useQuery } from "@apollo/client";
import { Redirect, useParams } from "react-router-dom";

import { useUserContext } from "../../context/UserContext";

import { BUDDIES_QUERY, USER_QUERY } from "../../graphql/queries";

import ProfilePageContent from "../../components/ProfilePage/ProfilePageContent";

import "./ProfilePage.css";

const ProfilePage = () => {
  const { username } = useParams();
  const { state } = useUserContext();

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { username },
  });

  const {
    loading: buddiesLoading,
    error: buddiesError,
    data: buddiesData,
  } = useQuery(BUDDIES_QUERY, {
    variables: { recipientId: state.user.id, status: "PENDING" },
  });

  console.log(buddiesData);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  if (!data?.findUser) {
    return <div>error no data</div>;
  }

  const user = data.findUser;

  console.log(user);

  return (
    <div>
      <ProfilePageContent user={user} currentUser={state.user} />
    </div>
  );
};

export default ProfilePage;
