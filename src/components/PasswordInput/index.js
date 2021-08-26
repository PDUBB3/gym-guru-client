import { useState } from "react";
import { Controller } from "react-hook-form";

import Box from "@material-ui/core/Box";
import classNames from "classnames";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core";

import "./PasswordInput.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    padding: "8px 16px",
    minWidth: "20rem",
    textAlign: "left",
  },
}));

const PasswordInput = ({ control, placeholder, name }) => {
  const classes = useStyles();

  return (
    <Box component="div" m={1}>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl className={classes.formControl}>
            <InputLabel
              className={classNames(classes.formControl, {
                "form-error": error,
              })}
            >
              {placeholder}
            </InputLabel>
            <Input
              value={value}
              onChange={onChange}
              error={!!error}
              label="Password"
              type="password"
            />
          </FormControl>
        )}
      />
    </Box>
  );
};

export default PasswordInput;
