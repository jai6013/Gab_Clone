import React from "react";
import { Home } from "../Components/Home/Home";
import { Navbar } from "../Components/Navbar/NavBar";
import BottomNav from "../Components/Navbar/BottomNav";
import { Theme } from "../Styles/Theme";

export const NewsPage = () => {
  return (
    <Theme>
      <Navbar page="news" />
      <BottomNav page="news" />
      <Home page="News" />
    </Theme>
  );
};
