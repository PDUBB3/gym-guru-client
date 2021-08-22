import { GiHearts } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";

import BuddyCard from "../BuddyCard";

const InfoSection = ({ user }) => {
  const { interests, goals, buddies } = user;
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
        </div>
      </div>
      <div className="buddies-container">
        <div className="box">
          <h2>Buddies</h2>
          <div className="cards">
            {buddies.map((buddy) => (
              <BuddyCard buddy={buddy} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
