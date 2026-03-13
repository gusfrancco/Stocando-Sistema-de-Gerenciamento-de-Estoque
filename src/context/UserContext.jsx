import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("user_logged_name") || "";
  });

  const updateUserName = (name) => {
    setUserName(name);
    if (name) {
      localStorage.setItem("user_logged_name", name);
    } else {
      localStorage.removeItem("user_logged_name");
    }
  };

  return (
    <UserContext.Provider value={{ userName, setUserName: updateUserName }}>
      {children}
    </UserContext.Provider>
  );
};
