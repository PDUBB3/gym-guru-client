import { createContext, useState, useMemo } from "react";

export const BuddiesFilterContext = createContext();

export const BuddiesFilterProvider = ({ ...rest }) => {
  const [filterParams, setFilterParams] = useState("");

  const value = useMemo(
    () => ({
      filterParams,
      setFilterParams,
    }),
    [filterParams]
  );

  return <BuddiesFilterContext.Provider value={value} {...rest} />;
};
