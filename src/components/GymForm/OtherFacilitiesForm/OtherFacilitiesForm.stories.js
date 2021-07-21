import React from "react";

import OtherFacilitiesForm from ".";

export default {
  title: "Components/GymForm/OtherFacilitiesForm",
  component: OtherFacilitiesForm,
};

export const OtherFacilitiesFormStory = (props) => (
  <OtherFacilitiesForm {...props} />
);

OtherFacilitiesFormStory.args = {
  /** props here if any see sample below:
    propName: value
  */
  otherFacilities: [
    "Parking",
    "Sauna",
    "Steam Room",
    "Spa",
    "Changing Room",
    "Showers",
    "Restaurant & Bar",
    "Creche",
  ],
};
