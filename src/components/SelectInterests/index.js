import React from "react";
import { Select } from "react-select-tile";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SelectInterests = () => {
  const [value, setValue] = React.useState("");

  const handleItemClick = (value) => {
    setValue(value);
    console.log(`Option selected:`, value);
  };

  return (
    <Select
      placeholder="Please select ..."
      value={value}
      options={options}
      onItemClick={handleItemClick}
    />
  );
};

export default SelectInterests;
