import React, { createContext } from "react";
import { useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [User, setUser] = useState({
    id: "",
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    name: "",
    role: "",
    meta: {},
    avatar: "",
  });

  const contextValue = { User, setUser };
  return <UserDataContext.Provider value={contextValue}>{children}</UserDataContext.Provider>;
};

export default UserContext;
