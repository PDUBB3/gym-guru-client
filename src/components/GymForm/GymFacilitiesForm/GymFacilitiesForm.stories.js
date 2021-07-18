import React from "react";

import GymFacilitiesForm from ".";

export default {
  title: "Components/GymForm/GymFacilitiesForm",
  component: GymFacilitiesForm,
};

export const GymFacilitiesFormStory = (props) => (
  <GymFacilitiesForm {...props} />
);

GymFacilitiesFormStory.args = {
  /** props here if any see sample below:
    propName: value
  */
};
