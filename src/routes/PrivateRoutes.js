import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useUserContext } from "../context/UserContext";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import BuddiesPage from "../pages/BuddiesPage/BuddiesPage";

const PrivateRoutes = () => {
  const { state } = useUserContext();

  return (
    <>
      <Route exact path="/profile/:username">
        {state.user ? <ProfilePage /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/findbuddies">
        {state.user ? <BuddiesPage /> : <Redirect to="/login" />}
      </Route>
    </>
  );
};

export default PrivateRoutes;
