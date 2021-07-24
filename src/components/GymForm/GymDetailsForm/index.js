import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, Box, Button, TextInput } from "grommet";
import styled from "styled-components";

import "./GymDetailsForm.css";

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

  const [value, setValue] = useState({});

  return (
    <Form
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
      onReset={() => setValue({})}
      onSubmit={({ value }) => {}}
    >
      <FormField name="name" htmlFor="text-input-id" label="Name">
        <TextInput
          id="text-input-id"
          name="name"
          {...register("name", { required: true })}
        />
      </FormField>
      <FormField name="address" htmlFor="text-input-id" label="Address">
        <TextInput
          id="text-input-id"
          name="Address"
          {...register("address", { required: true })}
        />
      </FormField>
      <FormField name="city" htmlFor="text-input-id" label="City">
        <TextInput
          id="text-input-id"
          name="City"
          {...register("city", { required: true })}
        />
      </FormField>
      <FormField name="postcode" htmlFor="text-input-id" label="Postcode">
        <TextInput
          id="text-input-id"
          name="Postcode"
          {...register("postcode", { required: true })}
        />
      </FormField>
      <FormField
        name="contactNumber"
        htmlFor="text-input-id"
        label="Contact Number"
      >
        <TextInput
          id="text-input-id"
          name="Contact Number"
          {...register("contactNumber", { required: true })}
        />
      </FormField>
      <Box direction="row" gap="medium">
        <MyStyledButton
          class="submit-btn"
          type="submit"
          primary
          label="Submit"
        />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  );
};

export default CreateGymDetailsForm;
