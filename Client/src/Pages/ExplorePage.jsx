import React from "react";

import { Navbar } from "../Components/Navbar/NavBar";
import BottomNav from "../Components/Navbar/BottomNav";
import { Theme } from "../Styles/Theme";
import { Explore } from "../Components/Explore/Explore";
export const ExplorePage = () => {
  return (
    <Theme>
      <Navbar page="explore" />
      <BottomNav page="explore" />
      <Explore page="Explore" />
    </Theme>
  );
};
