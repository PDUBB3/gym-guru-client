import React from "react";

import GymForm from ".";

export default {
  title: "Components/GymForm",
  component: GymForm,
};

export const Default = (props) => <GymForm {...props} />;

Default.args = {
  /** props here if any see sample below:
    propName: value
  */
};
