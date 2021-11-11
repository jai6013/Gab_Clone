import React from "react";
import { Home } from "../Components/Home/Home";
import { Navbar } from "../Components/NavBar/NavBar";
import BottomNav from "../Components/NavBar/BottomNav";
import { Theme } from "../Styles/Theme";

export const HomePage = () => {
  return (
    <Theme>
      <Navbar page="home" />
      <BottomNav page="home"/>
      <Home page="home" />
    </Theme>
  );
};
