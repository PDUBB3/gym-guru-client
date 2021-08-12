import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { SIGNUP } from "../../graphql/mutations";

import FormInput from "../FormInput";
import ImageUpload from "../ImageUpload";
import PasswordInput from "../PasswordInput";
import SelectInterests from "../SelectInterests";

import "./SignUpForm.css";

const SignUpForm = ({ redirect = "/login" }) => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signUp, { data, error, loading }] = useMutation(SIGNUP, {
    onCompleted: () => {
      history.push(redirect);
    },
    onError: () => {},
  });

  const onSubmit = async (formData) => {
    await signUp({
      variables: {
        signUpInput: formData,
      },
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

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

        <SelectInterests />

        <button className="button border-gradient" type="submit">
          Sign Up
        </button>

        {error && !data && <div>Failed to sign up. Please try again.</div>}
      </form>
    </div>
  );
};

export default SignUpForm;
