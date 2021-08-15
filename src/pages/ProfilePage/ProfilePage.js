import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { USER_QUERY } from "../../graphql/queries";

import ProfilePageContent from "../../components/ProfilePage/ProfilePageContent";

import "./ProfilePage.css";

const ProfilePage = () => {
  const { username } = useParams();

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { username },
  });

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

  return (
    <div>
      <ProfilePageContent user={user} />
    </div>
  );
};

export default ProfilePage;
