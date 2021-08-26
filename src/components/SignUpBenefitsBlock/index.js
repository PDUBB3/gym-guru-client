import GymUser from "../../assets/img/fitnessf.png";
import GymOwners from "../../assets/img/gymowners.png";

import "../SignUpBenefitsBlock/SignUpBenefitsBlock.css";
// Benefits block for homepage

const SignUpBenefitsBlock = (props) => {
  return (
    <div className="benefits">
      <img
        src={GymOwners}
        width="400"
        height="300"
        alt="Gym owners signup benefits"
      />
      <img
        src={GymUser}
        width="400"
        height="300"
        alt="Gym users signup benefits"
      />
    </div>
  );
};

export default SignUpBenefitsBlock;
