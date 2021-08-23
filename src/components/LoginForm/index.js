import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { Controller } from "react-hook-form";
import Box from "@material-ui/core/Box";
import classNames from "classnames";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import { useUserContext } from "../../context/UserContext";
import { LOGIN } from "../../graphql/mutations";
import FormInput from "../FormInput";

import "./LoginForm.css";
import "../Button/button.css";

const LoginForm = ({ redirect }) => {
  const history = useHistory();
  const { dispatch } = useUserContext();
  const [passwordShown, setPasswordShown] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [login, { data, error, loading }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      const payload = {
        token: data.login.token,
        email: data.login.user.email,
        username: data.login.user.username,
        id: data.login.user.id,
      };

      localStorage.setItem("user", JSON.stringify(payload));

      dispatch({
        type: "LOGIN",
        payload,
      });

      history.push("/");
    },
    onError: () => {},
  });

  const onSubmit = async (formData) => {
    console.log(formData);
    await login({
      variables: {
        loginInput: formData,
      },
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="form-box">
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 className="form-heading">Sign in</h2>
        </div>
        <FormInput control={control} placeholder="Username" name="username" />
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
                  type={passwordShown ? "text" : "password"}
                />
              </FormControl>
            )}
          />
        </Box>
        <button onClick={togglePassword}>Show</button>

        <button className="button hover" type="submit">
          <span>Sign in</span>
        </button>
        {error && !data && (
          <div>Incorrect email or password. Please try again.</div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
