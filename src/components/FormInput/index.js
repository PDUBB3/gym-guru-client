import classNames from "classnames";
import { Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import "./FormInput.css";

const FormInput = ({
  placeholder,
  name,
  control,
  required = false,
  defaultValue = "",
  classes,
}) => {
  return (
    <Box component="div" m={1}>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        defaultValue={defaultValue}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl className={classes?.formControl}>
            <InputLabel
              className={classNames(classes?.formControl, {
                "form-error": error,
              })}
            >
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
