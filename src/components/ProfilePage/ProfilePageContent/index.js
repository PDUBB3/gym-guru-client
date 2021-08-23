import AboutSection from "../AboutSection";
import InfoSection from "../InfoSection";

import { BUDDIES_QUERY } from "../../../graphql/queries";
import { useQuery } from "@apollo/client";

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
    return <h1>Loading</h1>;
  }

  return (
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
        user={rest}
      />
    </div>
  );
};

export default ProfilePageContent;
