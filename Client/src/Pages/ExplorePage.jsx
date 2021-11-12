import React from "react";
import { Home } from "../Components/Home/Home";
import { Navbar } from "../Components/Navbar/NavBar";
import BottomNav from "../Components/Navbar/BottomNav";
import { Theme } from "../Styles/Theme";

export const ExplorePage = () => {
  return (
    <Theme>
      <Navbar page="explore" />
      <BottomNav page="explore" />
      <Home />
    </Theme>
  );
};
