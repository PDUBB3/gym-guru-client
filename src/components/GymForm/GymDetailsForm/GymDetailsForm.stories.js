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
  name: "Pure Gym",
  address: "Unit 7, Windmill Shopping Centre, Cape Hill",
  postCode: "B66 3PR",
  city: "Birmingham",
  contactNumber: "0121 626 3915",
};
