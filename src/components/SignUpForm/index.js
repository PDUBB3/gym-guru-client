import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { SIGNUP } from "../../graphql/mutations";

import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";

import "./SignUpForm.css";

const SignUpForm = ({ redirect = "/login" }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm();

  const [formNumber, setFormNumber] = useState(1);

  const history = useHistory();

  const [signUp, { data, error, loading }] = useMutation(SIGNUP, {
    onCompleted: () => {
      history.push(redirect);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const onSubmit = async (formData) => {
    console.log(formData);

    try {
      console.log(formData);
      await signUp({
        variables: {
          signUpInput: formData,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const onClickNext = (event) => {
    setFormNumber(formNumber + 1);
  };

  const onClickPrevious = () => {
    setFormNumber(formNumber - 1);
  };

  const renderForm = () => {
    if (formNumber === 1) {
      return (
        <PartOne
          setValue={setValue}
          errors={errors}
          register={register}
          control={control}
        />
      );
    }
    if (formNumber === 2) {
      return (
        <PartTwo
          setValue={setValue}
          errors={errors}
          register={register}
          control={control}
        />
      );
    }
    if (formNumber === 3) {
      return (
        <PartThree
          setValue={setValue}
          errors={errors}
          register={register}
          control={control}
        />
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderForm()}
      <div className="button-container">
        {formNumber !== 1 && (
          <button
            className=" button prevbutton"
            type="button"
            onClick={onClickPrevious}
          >
            <span>Previous</span>
          </button>
        )}
        {formNumber !== 3 && (
          <button className="button hover" type="button" onClick={onClickNext}>
            <span>Next</span>
          </button>
        )}
        {formNumber === 3 && (
          <button className="button" type="submit">
            Submit
          </button>
        )}
      </div>
      {error && !data && <div>Failed to sign up. Please try again.</div>}
    </form>
  );
};

export default SignUpForm;
