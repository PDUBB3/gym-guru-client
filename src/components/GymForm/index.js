import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation } from "@apollo/client";

import { CREATE_GYM } from "../../graphql/mutations";
import GymDetailsForm from "./GymDetailsForm";
import OpeningHoursForm from "./OpeningHoursForm";
import ExerciseFacilitiesForm from "./ExerciseFacilitiesForm";
import OtherFacilitiesForm from "./OtherFacilitiesForm";

import "./GymForm.css";

const GymForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formNumber, setFormNumber] = useState(1);

  const [createGym] = useMutation(CREATE_GYM, {
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = async (formData) => {
    console.log("hi");
    await createGym({
      variables: {
        createGymInput: formData,
      },
    });
  };

  const onClickPrevious = () => {
    setFormNumber(formNumber - 1);
  };

  const onClickNext = () => {
    setFormNumber(formNumber + 1);
  };

  const renderForm = () => {
    if (formNumber === 1) {
      return <GymDetailsForm errors={errors} register={register} />;
    }
    if (formNumber === 2) {
      return <OpeningHoursForm />;
    }
    if (formNumber === 3) {
      return <ExerciseFacilitiesForm errors={errors} register={register} />;
    }
    if (formNumber === 4) {
      return <OtherFacilitiesForm errors={errors} register={register} />;
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
        {formNumber !== 4 && (
          <button className="button" type="button" onClick={onClickNext}>
            Next
          </button>
        )}
        {formNumber === 4 && (
          <button className="button" type="submit">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default GymForm;
