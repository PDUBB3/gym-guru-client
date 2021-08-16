import { GrYoga } from "react-icons/gr";
import { GiMuscleUp } from "react-icons/gi";
import { FaRunning, FaWeight } from "react-icons/fa";

import BuddyCard from "../BuddyCard";

const InfoSection = ({ user }) => {
  const { interests, goals, buddies } = user;
  return (
    <div className="extra-info-container">
      <div className="box">
        <h2>Interests</h2>
        <div className="cards">
          {interests.map((interest) => (
            <div>
              <div>
                <GrYoga />
              </div>
              <div>{interest}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="box">
        <h2>Goals</h2>
        <div className="cards">
          {goals.map((goal) => (
            <div>
              <div>
                <FaWeight />
              </div>
              <div>{goal}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="box">
        <h2>Buddies</h2>
        <div className="cards">
          {buddies.map((buddy) => (
            <BuddyCard buddy={buddy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
