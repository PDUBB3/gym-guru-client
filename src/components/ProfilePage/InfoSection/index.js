import { GiHearts } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";

import StarRatings from "react-star-ratings";

import BuddyCard from "../BuddyCard";

const InfoSection = ({ firstName, user, buddiesData, buddyRequestData }) => {
  const { interests, goals, attendingGymId, id, username } = user;
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
          <h2>Attending Gym</h2>
          {attendingGymId ? (
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
          ) : (
            <div className="no-gym">
              {firstName} does not currently attend a gym.
            </div>
          )}
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
              {buddiesData.map((buddy) => (
                <BuddyCard buddy={buddy} userId={id} username={username} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
