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
    getValues,
  } = useForm();

  const [formNumber, setFormNumber] = useState(1);

  const history = useHistory();

  const [signUp, { data, error, loading }] = useMutation(SIGNUP, {
    onCompleted: () => {
      // history.push(redirect);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const onSubmit = async (formData) => {
    console.log("onSubmit run");
    /* debugger; */
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

  console.log("hello");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <button
            className="button"
            type="submit"
            // onClick={() => {
            //   console.log(getValues());
            //   console.log(errors);
            //   // onSubmit(getValues());

            //   try {
            //     handleSubmit(onSubmit)();
            //   } catch (errorr) {
            //     console.log(errorr);
            //   }
            // }}
          >
            Submit
          </button>
        )}
      </div>
      {error && !data && <div>Failed to sign up. Please try again.</div>}
    </form>
  );
};

export default SignUpForm;
