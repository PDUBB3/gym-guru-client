import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { SIGNUP } from "../../graphql/mutations";

import PartTwo from "./PartTwo";

import "./SignUpForm.css";
import PartOne from "./PartOne";

const SignUpForm = ({ redirect = "/login" }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [formNumber, setFormNumber] = useState(1);

  const history = useHistory();

  const [signUp, { data, error, loading }] = useMutation(SIGNUP, {
    onCompleted: () => {
      history.push(redirect);
    },
    onError: () => {},
  });

  const onSubmit = async (formData) => {
    console.log(formData);
    await signUp({
      variables: {
        signUpInput: formData,
      },
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const onClickNext = () => {
    setFormNumber(formNumber + 1);
  };

  const onClickPrevious = () => {
    setFormNumber(formNumber - 1);
  };

  const renderForm = () => {
    if (formNumber === 1) {
      return <PartOne errors={errors} register={register} />;
    }
    if (formNumber === 2) {
      return (
        <PartTwo setValue={setValue} errors={errors} register={register} />
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gymForm">
      {renderForm()}
      <div className="button-block">
        {formNumber !== 1 && (
          <button
            className="button border-gradient"
            type="button"
            onClick={onClickPrevious}
          >
            Previous
          </button>
        )}
        {formNumber !== 2 && (
          <button className="button" type="button" onClick={onClickNext}>
            Next
          </button>
        )}
        {formNumber === 2 && (
          <button className="button" type="submit">
            Submit
          </button>
        )}
      </div>
      {error && !data && <div>Failed to sign up. Please try again.</div>}
    </form>
  );

  // return (
  //   <div class="signUp-form-box">
  //     <form className="signUpForm" onSubmit={handleSubmit(onSubmit)}>
  //       <div>
  //         <h2 class="form-heading">Sign Up Here</h2>
  //       </div>
  //       <FormInput
  //         placeholder="First name"
  //         error={errors.firstName}
  //         register={register("firstName", { required: true })}
  //       />
  //       <FormInput
  //         placeholder="Last name"
  //         error={errors.lastName}
  //         register={register("lastName", { required: true })}
  //       />
  //       <FormInput
  //         placeholder="Email"
  //         error={errors.email}
  //         register={register("email", { required: true })}
  //       />
  //       <FormInput
  //         placeholder="Username"
  //         error={errors.username}
  //         register={register("username", { required: true })}
  //       />

  //       <PasswordInput register={register} />

  //       <ImageUpload setValue={setValue} />

  //       <FormInput
  //         placeholder="City"
  //         error={errors.city}
  //         register={register("city", { required: true })}
  //       />

  //       <FormInput
  //         placeholder="Type a short bio about yourself here"
  //         error={errors.bio}
  //         register={register("bio", { required: true })}
  //       />

  //       <GymOwnerCheckBox register={register} />

  //       <button
  //         onSubmit={handleSubmit(onSubmit)}
  //         className="signUpBtn"
  //         type="submit"
  //       >
  //         Sign Up
  //       </button>

  //       {error && !data && <div>Failed to sign up. Please try again.</div>}
  //     </form>
  //   </div>
  // );
};

export default SignUpForm;
