import classNames from "classnames";
import { Controller } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import MultiSelectDropDown from "../MultiSelectDropDown";
import GymOwnerCheckBox from "../GymOwnerCheckBox";

import "./SignUpForm.css";
import "../Button/button.css";
import { useState } from "react";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;

const checkedIcon = <CheckBoxIcon fontSize="small" />;

const PartTwo = ({ control }) => {
  const goals = [
    "Lose Weight",
    "Gain Muscle",
    "Toning",
    "Make Friends",
    "Get Fit",
    "Improving Endurance",
    "Improve Strength",
  ];

  const interests = [
    "Yoga",
    "Cycling",
    "Cardio",
    "Weight Lifting",
    "Endurance",
    "Gym Classes",
  ];

  const [isGymOwner, setIsGymOwner] = useState(false);

  const handleChange = (event) => {
    setIsGymOwner(event.target.checked);
  };

  return (
    <div className="signUp-form-box">
      <Box component="div" m={1}>
        <Controller
          name="city"
          control={control}
          rules={{ required: "City is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
              <InputLabel className={classNames({ "form-error": error })}>
                City
              </InputLabel>
              <Input value={value} onChange={onChange} error={!!error} />
            </FormControl>
          )}
        />
      </Box>
      <Box component="div" m={1}>
        <Controller
          name="bio"
          control={control}
          rules={{ required: "Bio is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
              <TextareaAutosize
                value={value}
                onChange={onChange}
                error={!!error}
                placeholder="Bio"
                className={classNames({ "form-error": error })}
              />
            </FormControl>
          )}
        />
      </Box>
      <Box component="div" m={1}>
        <MultiSelectDropDown
          options={goals}
          placeholder="Goals"
          name="goals"
          control={control}
        />
      </Box>
      <Box component="div" m={1}>
        <MultiSelectDropDown
          options={interests}
          placeholder="Interests"
          name="interests"
          control={control}
        />
      </Box>
      <Box component="div" m={1}>
        <Controller
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={value}
                  onChange={onChange}
                  name="isGymOwner"
                  color="primary"
                />
              }
              label="Are you a gym owner?"
            />
          )}
          name="isGymOwner"
          control={control}
        />
      </Box>
    </div>
  );
};

export default PartTwo;
