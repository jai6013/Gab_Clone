import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    console.log("login clicked");
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
