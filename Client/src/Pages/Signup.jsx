import React, { useContext } from "react";
import { Redirect } from "react-router";
import { SignUpPage } from "../Components/UserAuthPages/SignUpPage";
import { AuthContext } from "../Contexts/AuthContext";

export const Signup = () => {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) return <Redirect to="/" />;
  return <SignUpPage />;
};
