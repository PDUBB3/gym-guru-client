import AboutSection from "../AboutSection";
import InfoSection from "../InfoSection";

const ProfilePageContent = ({ user }) => {
  const { firstName, lastName, city, bio, profileImageUrl, ...rest } = user;

  console.log(user);

  return (
    <div className="profile-container">
      <AboutSection
        firstName={firstName}
        lastName={lastName}
        city={city}
        bio={bio}
        profileImageUrl={profileImageUrl}
        id={user.id}
      />
      <InfoSection user={rest} />
    </div>
  );
};

export default ProfilePageContent;
