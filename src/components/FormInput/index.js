import classNames from "classnames";
import { useState } from "react";
import { Controller } from "react-hook-form";

import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import "./FormInput.css";

const FormInput = ({ placeholder, name, control }) => {
  return (
    <Box component="div" m={1}>
      <Controller
        name={name}
        control={control}
        rules={{ required: `${placeholder} is required` }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl>
            <InputLabel className={classNames({ "form-error": error })}>
              {placeholder}
            </InputLabel>
            <Input value={value} onChange={onChange} error={!!error} />
          </FormControl>
        )}
      />
    </Box>
  );
};

export default FormInput;
