import { GiHearts } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";

import StarRatings from "react-star-ratings";

import BuddyCard from "../BuddyCard";

const InfoSection = ({
  firstName,
  user,
  currentUser,
  buddiesData,
  buddyRequestData,
}) => {
  const {
    interests,
    goals,
    isGymOwner,
    ownedGymId,
    attendingGymId,
    id,
    username,
  } = user;

  return (
    <div className="extra-info-container">
      <div className="goals-interests-container">
        <div className="box goals-interests">
          <h2>Interests</h2>
          <div className="cards">
            {interests.map((interest) => (
              <div>
                <div>
                  <GiHearts />
                </div>
                <div>{interest}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="box goals-interests">
          <h2>Goals</h2>
          <div className="cards">
            {goals.map((goal) => (
              <div>
                <div>
                  <FiTarget />
                </div>
                <div>{goal}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="gym-details-container">
        <div className="box">
          {!isGymOwner
            ? [
                attendingGymId ? (
                  <div>
                    <h2>Attending Gym</h2>
                    <a href={`/gyms/${attendingGymId.id}`} className="gym-link">
                      <div className="gym-info">
                        <div>
                          <img
                            src={attendingGymId.imageURL}
                            alt={attendingGymId.name}
                            width="200"
                            height="150"
                          />
                        </div>
                        <div className="gym-details">
                          <h4>{attendingGymId.name}</h4>
                          <div>{attendingGymId.city}</div>
                          <div className="gym-rating">
                            <StarRatings
                              rating={attendingGymId.rating}
                              numberOfStars={5}
                              starRatedColor="#00b4d8"
                              starDimension="30px"
                              starSpacing="3px"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ) : (
                  <div className="no-gym">
                    <h2>Attending Gym</h2>
                    <div>{firstName} does not currently attend a gym.</div>
                  </div>
                ),
              ]
            : [
                ownedGymId ? (
                  <div>
                    <h2>Owned Gym</h2>
                    <a href={`/gyms/${ownedGymId.id}`} className="gym-link">
                      <div className="gym-info">
                        <div>
                          <img
                            src={ownedGymId.imageURL}
                            alt={ownedGymId.name}
                            width="200"
                            height="150"
                          />
                        </div>
                        <div className="gym-details">
                          <h4>{ownedGymId.name}</h4>
                          <div>{ownedGymId.city}</div>
                          <div className="gym-rating">
                            <StarRatings
                              rating={ownedGymId.rating}
                              numberOfStars={5}
                              starRatedColor="#00b4d8"
                              starDimension="30px"
                              starSpacing="3px"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ) : (
                  <div className="no-gym">
                    <h2>Own Gym</h2>
                    {username === currentUser.username ? (
                      <a href="/gyms/new">Add a gym</a>
                    ) : (
                      <div>{firstName} has not registered their gym.</div>
                    )}
                  </div>
                ),
              ]}
        </div>
      </div>
      <div className="buddies-container">
        <div className="box buddiesBox">
          <h2>Buddy List</h2>
          {buddyRequestData.length > 0 && (
            <div className="buddyRequestsContainer">
              <h3>Buddy Requests</h3>
              <div className="cards">
                {buddyRequestData.map((buddy) => (
                  <BuddyCard buddy={buddy} userId={id} username={username} />
                ))}
              </div>
            </div>
          )}
          <div className="buddyContainer">
            {buddyRequestData.length > 0 && <h3>Buddies</h3>}
            <div className="cards">
              {buddiesData.length ? (
                buddiesData.map((buddy) => (
                  <BuddyCard buddy={buddy} userId={id} username={username} />
                ))
              ) : (
                <div>{firstName} does not have any gym buddies.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
