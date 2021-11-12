import React from "react";
import { Navbar } from "../Components/Navbar/NavBar";
import { Theme } from "../Styles/Theme";

export const ErrorPage = () => {
  return (
    <Theme>
      <Navbar />
      <div style={{ paddingTop: "70px", marginLeft: "20%" }}>
        <h1 style={{ marginTop: "10%" }}>404 Error page not found</h1>
      </div>
    </Theme>
  );
};
