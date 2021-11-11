import React from "react";
import { Groups } from "../Components/Groups/Groups";
import { Navbar } from "../Components/Navbar/Navbar";
import { Theme } from "../Styles/Theme";

export const GroupsPage = () => {
  return (
    <Theme>
      <Navbar page="groups" />
      <Groups />
    </Theme>
  );
};
