import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import ImageUpload from "../ImageUpload";
import PasswordInput from "../PasswordInput";

import "./SignUpForm.css";

const SignUpForm = () => {
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
      <form className="signUpForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 class="form-heading">Sign Up Here</h2>
        </div>
        <FormInput
          placeholder="First name"
          error={errors.firstName}
          register={register("firstName", { required: true })}
        />
        <FormInput
          placeholder="Last name"
          error={errors.lastName}
          register={register("lastName", { required: true })}
        />
        <FormInput
          placeholder="Email"
          error={errors.email}
          register={register("email", { required: true })}
        />

        <PasswordInput />

        <ImageUpload />

        <FormInput
          placeholder="City"
          error={errors.city}
          register={register("city", { required: true })}
        />

        <FormInput
          placeholder="Type a short bio about yourself here"
          error={errors.bio}
          register={register("bio", { required: true })}
        />

        <button className="button border-gradient" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
