import FormInput from "../../FormInput";

import "./LoginForm.css";

const LoginForm = ({ errors, register }) => {
  return (
    <div class="form-box">
      <div>
        <h2 class="form-heading">Sign in</h2>
      </div>
      <FormInput
        placeholder="Username"
        error={errors.username}
        register={register("username", { required: true })}
      />
      <FormInput
        placeholder="Password"
        error={errors.password}
        register={register("password", { required: true })}
      />
      <button className="button border-gradient" type="button">
        Sign in
      </button>
    </div>
  );
};

export default LoginForm;
