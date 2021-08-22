import AboutSection from "../AboutSection";
import InfoSection from "../InfoSection";

const ProfilePageContent = ({ user }) => {
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
      />
      <InfoSection user={rest} />
    </div>
  );
};

export default ProfilePageContent;
