import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, Box, Button, TextInput } from "grommet";
import styled from "styled-components";

import "./GymDetailsForm.css";
import FormInput from "../../FormInput";

const MyStyledButton = styled(Button)`
  font-weight: bold;
  background-color: #743ad5;
`;

const CreateGymDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <div className="button-block">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CreateGymDetailsForm;
