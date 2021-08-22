import AboutSection from "../AboutSection";
import InfoSection from "../InfoSection";

const ProfilePageContent = ({
  user,
  currentUser,
  buddiesData,
  buddyRequestsData,
}) => {
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
        id={user.id}
        currentUser={currentUser}
      />
      <InfoSection
        firstName={firstName}
        buddiesData={buddiesData}
        buddyRequestData={buddyRequestsData}
        user={rest}
      />
    </div>
  );
};

export default ProfilePageContent;
