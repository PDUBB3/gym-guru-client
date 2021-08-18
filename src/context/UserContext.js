import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ currentUser, onLogin, onLogout, ...rest }) => {
  return (
    <UserContext.Provider
      value={{ currentUser, onLogin, onLogout }}
      {...rest}
    />
  );
};
