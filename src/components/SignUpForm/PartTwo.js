import ImageUploader from "../ImageUploader";
import classNames from "classnames";
import { Controller } from "react-hook-form";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

import MultiSelectDropDown from "../MultiSelectDropDown";

import "./SignUpForm.css";
import "../Button/button.css";

const PartTwo = ({ control, setValue }) => {
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
        <ImageUploader setValue={setValue} />
      </Box>

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
              <TextField
                placeholder="Bio"
                multiline
                rows={1}
                rowsMax={5}
                value={value}
                onChange={onChange}
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
