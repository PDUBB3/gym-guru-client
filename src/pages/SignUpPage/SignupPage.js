import SignUpBenefitsBlock from "../../components/SignUpBenefitsBlock";
import SignUpAccordion from "../../components/SignUpAccordion";

const SignupPage = () => {
  return (
    <div>
      <div>
        <h1 className="form-heading">Sign Up Now</h1>
      </div>
      <div className="sign-up-form-container">
        <SignUpBenefitsBlock />
        <SignUpAccordion />
      </div>
    </div>
  );
};

export default SignupPage;
