import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import PasswordInput from "../PasswordInput";

import "./LoginForm.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div class="form-box">
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 class="form-heading">Sign in</h2>
        </div>
        <FormInput
          placeholder="Username"
          error={errors.username}
          register={register("username", { required: true })}
        />
        <PasswordInput />

        <button className="button border-gradient" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
