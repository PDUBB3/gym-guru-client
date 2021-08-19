import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import FormInput from "../FormInput";
import PasswordInput from "../PasswordInput";
import { UserContext } from "../../context/UserContext";
import { LOGIN } from "../../graphql/mutations";

import "./LoginForm.css";
import "../Button/button.css";

const LoginForm = ({ redirect }) => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { data, error, loading }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      const {
        token,
        user: { username, id },
      } = data.login;

      onLogin({
        id,
        token,
        username,
      });

      history.push(redirect || "/");
    },
    onError: () => {},
  });

  const onLogin = useContext(UserContext);

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
  return (
    <div class="form-box">
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 class="form-heading">Sign in</h2>
        </div>
        <FormInput
          placeholder="Username"
          error={errors.username}
          register={register("username", { required: true })}
        />
        <PasswordInput register={register("password", { required: true })} />

        <button className="button" type="submit">
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
