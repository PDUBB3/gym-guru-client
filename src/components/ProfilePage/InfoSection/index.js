import { GrYoga } from "react-icons/gr";
import { GiMuscleUp } from "react-icons/gi";
import { FaRunning, FaWeight } from "react-icons/fa";

import BuddyCard from "../BuddyCard";

const InfoSection = () => {
  return (
    <div className="extra-info-container">
      <div className="box">
        <h2>Interests</h2>
        <div className="cards">
          <div>
            <div>
              <GrYoga />
            </div>
            <div>Yoga</div>
          </div>
          <div>
            <div>
              <FaRunning />
            </div>
            <div>Cardio</div>
          </div>
        </div>
      </div>
      <div className="box">
        <h2>Goals</h2>
        <div className="cards">
          <div>
            <div>
              <FaWeight />
            </div>
            <div>Lose Weight</div>
          </div>
          <div>
            <div>
              <GiMuscleUp />
            </div>
            <div>Gain Muscle</div>
          </div>
        </div>
      </div>
      <div className="box">
        <h2>Buddies</h2>
        <div className="cards">
          <BuddyCard />
          <BuddyCard />
          <BuddyCard />
          <BuddyCard />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
