import React, { useContext } from "react";
import { Redirect } from "react-router";

import { LoginPage } from "../Components/UserAuthPages/LoginPage";
import { AuthContext } from "../Contexts/AuthContext";
export const Login = () => {
  const { isLoggedIn } = useContext(AuthContext);
  // if (isLoggedIn) return <Redirect to="/" />;
  return (
    <>
      <LoginPage></LoginPage>
    </>
  );
};
