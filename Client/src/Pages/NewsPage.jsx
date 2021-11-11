import React from "react";
import { Home } from "../Components/Home/Home";
import { Navbar } from "../Components/NavBar/NavBar";
import BottomNav from "../Components/NavBar/BottomNav";
import { Theme } from "../Styles/Theme";

export const NewsPage = () => {
  return (
    <Theme>
      <Navbar page="news" />
      <BottomNav page="news"/>
      <Home />
    </Theme>
  );
};
