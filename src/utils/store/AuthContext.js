import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { ApiManagerContext } from "./ApiMangerContext";
// create the context
export const UserContext = createContext({
  token: "",
  login: () => {},
  logout: () => {},
});

// create a provider for the context
export const UserProvider = ({ children }) => {
  // state to store the user information
  const [token, setToken] = useState("");
  const ApiManager = useContext(ApiManagerContext);
  // login function to save the user information in state and local storage
  const login = useCallback(async (userInfo) => {
    setToken(userInfo);
    localStorage.setItem("token", JSON.stringify(userInfo));
  }, []);

  // logout function to remove the user information from state and local storage
  const logout = useCallback(() => {
    setToken();
    localStorage.removeItem("token");
  }, []);

  // useMemo to store the parsed data from localstorage
  const storedData = useMemo(() => {
    try {
      const local_storage = JSON.parse(localStorage.getItem("token"));
      return local_storage;
    } catch (error) {
      localStorage.removeItem("token");
      return;
    }
  }, []);

  useEffect(() => {
    const isValid = async () => {
      if (storedData == null) {
        return;
      } else {
        try {
          const token_validation = await ApiManager.get(
            "/users/validate-token",
            {},
            {
              Authorization: storedData,
            }
          );
          if (!token_validation.error) {
            login(storedData);
          } else {
            logout();
          }
        } catch {
          logout();
        }
      }
    };
    isValid();
  }, [login, logout, ApiManager, storedData]);

  return (
    <UserContext.Provider value={{ token: token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
