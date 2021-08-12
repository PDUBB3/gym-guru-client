import React from "react";

import GymCard from ".";

export default {
  title: "Components/GymCard",
  component: GymCard,
};

export const GymCardStory = (props) => <GymCard {...props} />;

GymCardStory.args = {
  name: "Pure Gym",
  address: "Unit 7, Windmill Shopping Centre",
  postCode: "B66 3PR",
  city: "Smethwick",
  contactNumber: "0121 0000000",
  imageUrl:
    "https://mir-s3-cdn-cf.behance.net/projects/max_808/f7189086626231.Y3JvcCwxMDgwLDg0NCwwLDExNw.png",
};
