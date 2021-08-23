import classNames from "classnames";
import { Controller } from "react-hook-form";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";

import "./SignUpForm.css";
import "../Button/button.css";

const PartOne = ({ control }) => {
  return (
    <div className="signUp-form-container">
      <div className="signUp-form-box">
        <div>
          <h2 className="form-heading">Sign Up Here</h2>
        </div>
        <Box component="div" m={1}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl>
                <InputLabel className={classNames({ "form-error": error })}>
                  First Name
                </InputLabel>
                <Input value={value} onChange={onChange} error={!!error} />
              </FormControl>
            )}
          />
        </Box>
        <Box component="div" m={1}>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl>
                <InputLabel className={classNames({ "form-error": error })}>
                  Last Name
                </InputLabel>
                <Input value={value} onChange={onChange} error={!!error} />
              </FormControl>
            )}
          />
        </Box>
        <Box component="div" m={1}>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl>
                <InputLabel className={classNames({ "form-error": error })}>
                  Email
                </InputLabel>
                <Input value={value} onChange={onChange} error={!!error} />
              </FormControl>
            )}
          />
        </Box>
        <Box component="div" m={1}>
          <Controller
            name="username"
            control={control}
            rules={{ required: "Username is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl>
                <InputLabel className={classNames({ "form-error": error })}>
                  Username
                </InputLabel>
                <Input value={value} onChange={onChange} error={!!error} />
              </FormControl>
            )}
          />
        </Box>
        <Box component="div" m={1}>
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl>
                <InputLabel className={classNames({ "form-error": error })}>
                  Password
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
      </div>
    </div>
  );
};

export default PartOne;
