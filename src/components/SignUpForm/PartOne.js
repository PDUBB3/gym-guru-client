import FormInput from "../FormInput";
import PasswordInput from "../PasswordInput";

import "./SignUpForm.css";

const PartOne = ({ errors, register }) => {
  return (
    <div className="signUp-form-box">
      <div>
        <h2 className="form-heading">Sign Up Here</h2>
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

      <PasswordInput register={register("password", { required: true })} />
    </div>
  );
};

export default PartOne;
