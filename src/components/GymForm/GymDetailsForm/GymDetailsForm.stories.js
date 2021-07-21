import React from "react";

import GymDetailsForm from ".";

export default {
  title: "Components/GymForm/GymDetailsForm",
  component: GymDetailsForm,
};

export const GymDetailsFormStory = (props) => <GymDetailsForm {...props} />;

GymDetailsFormStory.args = {
  /** props here if any see sample below:
    propName: value
  */
  name: "",
  address: "",
  postCode: "",
  city: "",
  contactNumber: "",
};
