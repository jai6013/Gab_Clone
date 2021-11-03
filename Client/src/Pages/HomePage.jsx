import React from "react";
import { Home } from "../Components/Home/Home";
import { Navbar } from "../Components/Navbar/Navbar";
import { Theme } from "../Styles/Theme";

export const HomePage = () => {
  return (
    <Theme>
      <Navbar />
      <Home />
    </Theme>
  );
};
