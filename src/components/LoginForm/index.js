import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { useUserContext } from "../../context/UserContext";
import { LOGIN } from "../../graphql/mutations";
import FormInput from "../FormInput";
import { Box, makeStyles } from "@material-ui/core";
import Loader from "react-loader-spinner";

import "./LoginForm.css";
import "../Button/button.css";
import PasswordInput from "../PasswordInput";

const useStyles = makeStyles((theme) => ({
  formControl: {
    padding: "8px 16px",
    minWidth: "100%",
    textAlign: "left",
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const { dispatch } = useUserContext();

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
        isGymOwner: data.login.user.isGymOwner,
        ownedGymId: data.login.user.ownedGymId,
        attendingGymId: data.login.user.attendingGymId,
      };

      localStorage.setItem("user", JSON.stringify(payload));

      dispatch({
        type: "LOGIN",
        payload,
      });

      history.push(`/${data.login.user.username}`);
    },
    onError: () => {},
  });

  const onSubmit = async (formData) => {
    formData.username = formData.username.toLowerCase();

    await login({
      variables: {
        loginInput: formData,
      },
    });
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </Box>
    );
  }

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
              classes={classes}
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
