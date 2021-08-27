import { useState } from "react";
import { Controller } from "react-hook-form";
import React from "react";
import clsx from "clsx";

import Box from "@material-ui/core/Box";
import classNames from "classnames";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  Button,
  IconButton,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";

import "./PasswordInput.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  formControl: {
    padding: "8px 16px",
    minWidth: "100%",
    textAlign: "left",
  },
}));

const PasswordInput = ({ control, placeholder, name }) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box component="div" m={1}>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl
            className={clsx(
              classes.margin,
              classes.textField,
              classes.formControl
            )}
          >
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={value}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
      />
    </Box>
  );
};

export default PasswordInput;
