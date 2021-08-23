import { useState } from "react";
import { Controller } from "react-hook-form";

import Box from "@material-ui/core/Box";
import classNames from "classnames";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import "./PasswordInput.css";

const PasswordInput = ({ control, placeholder, name }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Box component="div" m={1}>
      <Controller
        name={name}
        control={control}
        rules={{ required: `{placeholder} is required` }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl>
            <InputLabel className={classNames({ "form-error": error })}>
              {placeholder}
            </InputLabel>
            <Input
              value={value}
              onChange={onChange}
              error={!!error}
              label="Password"
              type={passwordShown ? "text" : "password"}
            />
          </FormControl>
        )}
      />
      <button onClick={togglePassword}>Show</button>
    </Box>
  );
};

export default PasswordInput;
