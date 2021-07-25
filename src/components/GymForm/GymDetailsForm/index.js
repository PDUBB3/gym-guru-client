import { useState } from "react";
import { useForm } from "react-hook-form";

import FormInput from "../../FormInput";

import "./GymDetailsForm.css";

const CreateGymDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formNumber, setFormNumber] = useState(1);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const onClickPrevious = () => {
    setFormNumber(formNumber - 1);
  };

  const onClickNext = () => {
    setFormNumber(formNumber + 1);
  };

  const renderFormOne = () => {
    return (
      <div>
        <FormInput
          placeholder="Name"
          error={errors.name}
          register={register("name", { required: true })}
        />
        <FormInput
          placeholder="Address"
          error={errors.address}
          register={register("address", { required: true })}
        />
        <FormInput
          placeholder="City"
          error={errors.city}
          register={register("city", { required: true })}
        />
        <FormInput
          placeholder="Postcode"
          error={errors.postcode}
          register={register("postcode", { required: true })}
        />
        <FormInput
          placeholder="Contact Number"
          error={errors.contactNumber}
          register={register("contactNumber", { required: true })}
        />
      </div>
    );
  };

  const renderFormThree = () => {
    const exerciseFacilities = [
      {
        id: 1,
        name: "Weight Area",
      },
      { id: 2, name: "Cardio Area" },
      {
        id: 3,
        name: "Fitness Studio",
      },
      {
        id: 4,
        name: "Swimming Pool",
      },
      {
        id: 5,
        name: "Tennis Court",
      },
    ];

    return (
      <div>
        {exerciseFacilities.map((exerciseFacility) => {
          return (
            <div key={exerciseFacility.id}>
              <input
                type="checkbox"
                name="scales"
                {...register(`exerciseFacilities_${exerciseFacility.id}`)}
              />
              <label>{exerciseFacility.name}</label>
            </div>
          );
        })}
      </div>
    );
  };

  const renderForm = () => {
    if (formNumber === 1) {
      return renderFormOne();
    }
    if (formNumber === 2) {
      return <div>Form 2</div>;
    }
    if (formNumber === 3) {
      return renderFormThree();
    }
    if (formNumber === 4) {
      return <div>Form 4</div>;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderForm()}
      <div className="button-block">
        {formNumber !== 1 && (
          <button type="button" onClick={onClickPrevious}>
            Previous
          </button>
        )}
        {formNumber !== 4 && (
          <button type="button" onClick={onClickNext}>
            Next
          </button>
        )}
        {formNumber === 4 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default CreateGymDetailsForm;
