import React from "react";
import { Groups } from "../Components/Groups/Groups";
import { Navbar } from "../Components/Navbar/NavBar";
import BottomNav from "../Components/Navbar/BottomNav";
import { Theme } from "../Styles/Theme";

export const GroupsPage = () => {
  return (
    <Theme>
      <Navbar page="groups" />
      <BottomNav page="groups" />
      <Groups />
    </Theme>
  );
};
