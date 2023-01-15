import React, { createContext, useState, useCallback, useEffect, useMemo } from "react";

// create the context
export const UserContext = createContext({
  user: { logged: false },
  login: () => { },
  logout: () => { },
});

// create a provider for the context
export const UserProvider = ({ children }) => {
  // state to store the user information
  const [user, setUser] = useState({ logged: false });

  // login function to save the user information in state and local storage
  const login = useCallback((userInfo) => {
    setUser(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
  }, []);

  // logout function to remove the user information from state and local storage
  const logout = useCallback(() => {
    setUser({ logged: false });
    localStorage.removeItem("user");
  }, []);

  // useMemo to store the parsed data from localstorage
  const storedData = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch (error) {
      console.log(error);
      return null;
    }
  }, []);

  useEffect(() => {
    if (storedData && storedData.logged) {
      login(storedData);
    }
  }, [login, storedData]);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
