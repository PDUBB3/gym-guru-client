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
import PasswordInput from "../PasswordInput";

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
    <div className="login-form-container">
      <div className="form-box">
        <div className="login-image-container"></div>
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-input-container">
            <h2 className="form-heading">Sign in</h2>

            <FormInput
              control={control}
              placeholder="Username"
              name="username"
            />
            <PasswordInput
              control={control}
              placeholder="Password"
              name="password"
            />

            <button className="button hover login-button" type="submit">
              <span>Sign in</span>
            </button>
            {error && !data && (
              <div>Incorrect email or password. Please try again.</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
