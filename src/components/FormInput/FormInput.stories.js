import React from "react";
import { useForm } from "react-hook-form";

import FormInput from ".";

export default {
  title: "Components/FormInput",
  component: FormInput,
};

export const BasicFormInput = (props) => {
  const { register } = useForm();
  return (
    <FormInput {...props} register={register("name", { required: true })} />
  );
};

export const ErrorFormInput = (props) => {
  const { register } = useForm();
  return (
    <FormInput {...props} register={register("name", { required: true })} />
  );
};

BasicFormInput.args = {
  placeholder: "This is a placeholder",
};

ErrorFormInput.args = {
  placeholder: "This is a placeholder",
  error: true,
};
