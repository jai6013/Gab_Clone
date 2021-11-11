import React from "react";
import { Home } from "../Components/Home/Home";
import { Navbar } from "../Components/Navbar/Navbar";
import { Theme } from "../Styles/Theme";

export const ExplorePage = () => {
  return (
    <Theme>
      <Navbar page="explore" />
      <Home />
    </Theme>
  );
};
