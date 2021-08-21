import "./Home-Benefits-Block.css";

const HomeBenefitsBlock = (props) => {
  return (
    <div className="benefits-container">
      <div className="benefits-block-1">
        <h2 className="h2-benefits">Sign Up</h2>
        <p className="benefits-p">
          Join the GymGuru family to kickstart your fitness journey
        </p>
      </div>
      <div className="benefits-block-2">
        <h2 className="h2-benefits">Find Gyms</h2>
        <p className="benefits-p">
          Find a new fitness hub or rate your favourite gym
        </p>
      </div>
      <div className="benefits-block-3">
        <h2 className="h2-benefits">Find Buddies</h2>
        <p className="benefits-p">
          Connect with new friends to smash those goals together
        </p>
      </div>
    </div>
  );
};

export default HomeBenefitsBlock;
