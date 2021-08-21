import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { useState, useEffect } from "react";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags({ options, placeholder, id, register }) {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const handleChange = (event, value) => {
    if (id === "goals") {
      setSelectedGoals(value);
    } else {
      setSelectedInterests(value);
    }
  };
  useEffect(() => {
    register(selectedGoals);
  }, [register]);
  return (
    <Autocomplete
      onChange={handleChange}
      multiple
      id={id}
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={placeholder}
          placeholder={placeholder}
        />
      )}
    />
  );
}

const goals = [
  { title: "Lose Weight" },
  { title: "Gain Muscle" },
  { title: "Toning" },
  { title: "Make Friends" },
  { title: "Get Fit" },
  { title: "Improving Endurance" },
  { title: "Improve Strength" },
];

const interests = [
  { title: "Yoga" },
  { title: "Cycling" },
  { title: "Cardio" },
  { title: "Weight Lifting" },
  { title: "Endurance" },
  { title: "Gym Classes" },
];
