import classNames from "classnames";
import { Controller } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";

import MultiSelectDropDown from "../MultiSelectDropDown";
import GymOwnerCheckBox from "../GymOwnerCheckBox";

import "./SignUpForm.css";
import "../Button/button.css";

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
      {/* <GymOwnerCheckBox register={register} /> */}
    </div>
  );
};

export default PartTwo;
