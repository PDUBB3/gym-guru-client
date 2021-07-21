import React from "react";

import ExerciseFacilitiesForm from ".";

export default {
  title: "Components/GymForm/ExerciseFacilitiesForm",
  component: ExerciseFacilitiesForm,
};

export const ExerciseFacilitiesFormStory = (props) => (
  <ExerciseFacilitiesForm {...props} />
);

ExerciseFacilitiesFormStory.args = {
  /** props here if any see sample below:
    propName: value
  */
  facilities: [
    "Weight Area",
    "Cardio Area",
    "Fitness Studio",
    "Tennis Court",
    "Swimming Pool",
  ],
};
