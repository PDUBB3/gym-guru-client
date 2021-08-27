import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignUpPage/SignupPage";
import GymsPage from "../pages/GymsPage/GymsPage";
import GymPage from "../pages/GymPage/GymPage";

import PrivateRoutes from "./PrivateRoutes";
import { useUserContext } from "../context/UserContext";
import CreateGymPage from "../pages/CreateGymPage";

const Routes = () => {
  const { state } = useUserContext();

  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <SignupPage />
      </Route>
      <Route exact path="/gyms">
        <GymsPage />
      </Route>
      <Route exact path="/gyms/new">
        {state.user ? <CreateGymPage /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/gyms/:id">
        <GymPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <PrivateRoutes />
    </Switch>
  );
};

export default Routes;
