import React from "react";
import { Groups } from "../Components/Groups/Groups";
import { Navbar } from "../Components/Navbar/Navbar";
import { Theme } from "../Styles/Theme";

export const GroupPage = () => {
  return (
    <Theme>
      <Navbar />
      <Groups />
    </Theme>
  );
};

export default GroupPage
