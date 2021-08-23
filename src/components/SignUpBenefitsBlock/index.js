import "./SignUpBenefitsBlock.css";

// Benefits block for homepage

const SignUpBenefitsBlock = (props) => {
  return (
    <>
      <div className="signup-benefits-block-container">
        <div className="signup-benefits-block">
          <div className="h2-roles-container"></div>
          <h2 className="signup-block-h2-roles">
            <span>Fitness Fanatics</span>
          </h2>
          <h2 className="signup-block-h2-benefits-white">Join Gym Guru To:</h2>
          <ul>
            <li>Find top gyms before investing in a membership </li>
            <li>Rate your gym to help others in their gym search</li>
            <li>Meet workout buddies to smash your goals together </li>
          </ul>
        </div>
        <div className="signup-benefits-block">
          <div className="h2-roles-container"></div>
          <h2 className="signup-block-h2-roles">
            <span>Gym Owners</span>
          </h2>
          <h2 className="signup-block-h2-benefits-white">Sign Up Now To:</h2>
          <ul>
            <li>Add your gym details to attract new members </li>
            <li>Interact with both new and existing customers </li>
            <li>See how your gym compares to others in the area</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SignUpBenefitsBlock;

{
}
