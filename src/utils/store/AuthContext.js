import React, { createContext, useState, useCallback } from 'react';

// create the context
export const UserContext = createContext();

// create a provider for the context
export const UserProvider = ({ children }) => {
  // state to store the user information
  const [user, setUser] = useState(null);

  // login function to save the user information in state and local storage
  const login = useCallback((userInfo) => {
    setUser(userInfo);
    localStorage.setItem('user', JSON.stringify(userInfo));
  }, []);

  // logout function to remove the user information from state and local storage
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};