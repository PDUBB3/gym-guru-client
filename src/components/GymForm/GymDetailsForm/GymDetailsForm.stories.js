import React from "react";

import GymDetailsForm from ".";

export default {
  title: "Components/GymForm/GymDetailsForm",
  component: GymDetailsForm,
};

export const WithoutError = (props) => <GymDetailsForm {...props} />;

export const WithError = (props) => <GymDetailsForm {...props} />;

WithoutError.args = {
  errors: {},
  register: () => {},
};

WithError.args = {
  errors: {
    name: true,
    address: true,
    postcode: true,
    city: true,
    contactNumber: true,
  },
  register: () => {},
};
