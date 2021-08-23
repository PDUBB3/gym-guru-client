import classNames from "classnames";
import { Controller } from "react-hook-form";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import MultiSelectDropDown from "../MultiSelectDropDown";

import "./SignUpForm.css";
import "../Button/button.css";

const PartThree = ({ control }) => {
  return (
    <div className="signUp-form-container">
      <div className="signUp-form-box">
        <div className="signUp-form-image-container"></div>
        <div className="signUp-form-input-container">
          <div className="form-heading">
            <h2>Add your social media information!</h2>
          </div>
          <Box component="div" m={1}>
            <Controller
              name="facebookUrl"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl>
                  <InputLabel className={classNames({ "form-error": error })}>
                    Facebook URL
                  </InputLabel>
                  <Input value={value} onChange={onChange} error={!!error} />
                </FormControl>
              )}
            />
          </Box>
          <Box component="div" m={1}>
            <Controller
              name="twitterUrl"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl>
                  <InputLabel className={classNames({ "form-error": error })}>
                    Twitter URL
                  </InputLabel>
                  <Input value={value} onChange={onChange} error={!!error} />
                </FormControl>
              )}
            />
          </Box>
          <Box component="div" m={1}>
            <Controller
              name="instagramUrl"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl>
                  <InputLabel className={classNames({ "form-error": error })}>
                    Instagram URL
                  </InputLabel>
                  <Input value={value} onChange={onChange} error={!!error} />
                </FormControl>
              )}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default PartThree;
