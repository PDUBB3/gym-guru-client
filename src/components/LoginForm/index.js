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
  loginFormContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    margin: "2rem",
  },
  loginFormImageContainer: {
    background: `url(
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    )`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  loginForm: {
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "repeat(2, 50%)",
    gridColumnGap: "10px",
    overflow: "hidden",
    color: "#00B4D8",
    border: "2px solid #484a4b",
    borderRadius: "5px",
    boxShadow: "0 20px 20px -5px #25293450",
    minHeight: "83vh",
    minWidth: "65vw",
    textAlign: "center",
    fontSize: "1.25rem",
    width: "60%",
    [theme.breakpoints.down("md")]: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 65%)",
    },
  },
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

      history.push(`/profile/${data.login.user.username}`);
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
    <div className={classes.loginFormContainer}>
      <div className={classes.loginForm}>
        <div className={classes.loginFormImageContainer}></div>
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
