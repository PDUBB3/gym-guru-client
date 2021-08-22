import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const ProfileRoute = () => {
  const { state } = useUserContext();

  return (
    <Route
      render={() => (state.user ? <ProfilePage /> : <Redirect to="/login" />)}
    />
  );
};

export default ProfileRoute;
