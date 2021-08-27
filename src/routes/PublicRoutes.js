import { Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignUpPage/SignupPage";
import GymsPage from "../pages/GymsPage/GymsPage";
import GymPage from "../pages/GymPage/GymPage";

const PublicRoutes = () => {
  return (
    <>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <SignupPage />
      </Route>
      <Route exact path="/gyms">
        <GymsPage />
      </Route>
      <Route exact path="/gyms/:id">
        <GymPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </>
  );
};

export default PublicRoutes;
