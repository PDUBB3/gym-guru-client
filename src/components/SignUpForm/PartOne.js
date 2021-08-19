import FormInput from "../FormInput";
import PasswordInput from "../PasswordInput";

import "./SignUpForm.css";
import "../Button/button.css";

const PartOne = ({ errors, register }) => {
  return (
    <div class="signUp-form-box">
      <form className="signUpForm">
        <div>
          <h2 class="form-heading">Sign Up Here</h2>
        </div>
        <FormInput
          placeholder="First name"
          error={errors?.firstName}
          register={register("firstName", { required: true })}
        />
        <FormInput
          placeholder="Last name"
          error={errors?.lastName}
          register={register("lastName", { required: true })}
        />
        <FormInput
          placeholder="Email"
          error={errors?.email}
          register={register("email", { required: true })}
        />
        <FormInput
          placeholder="Username"
          error={errors?.username}
          register={register("username", { required: true })}
        />

        <PasswordInput register={register} />
      </form>
    </div>
  );
};

export default PartOne;
