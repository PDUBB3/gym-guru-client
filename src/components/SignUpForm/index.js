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
        {formNumber !== 2 && (
          <button className="button hover" type="button" onClick={onClickNext}>
            <span>Next</span>
          </button>
        )}
        {formNumber === 2 && (
          <button className="button hover" type="submit">
            <span>Submit</span>
          </button>
        )}
      </div>
      {error && !data && <div>Failed to sign up. Please try again.</div>}
    </form>
  );
};

export default SignUpForm;
