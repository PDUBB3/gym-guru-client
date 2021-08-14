import { GrYoga } from "react-icons/gr";
import { GiMuscleUp } from "react-icons/gi";
import { FaRunning, FaWeight } from "react-icons/fa";

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
        <div className="buddy-card">
          <img
            src="https://images.unsplash.com/photo-1488228469209-c141f8bcd723?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="buddy"
            height="90"
            width="90"
            className="buddy-image"
          ></img>
          <h3>Alice Green</h3>
          <div>Leeds</div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
