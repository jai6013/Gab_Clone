import React from "react";
import { Theme } from "../Styles/Theme";
import { Navbar } from "../Components/Navbar/NavBar";
import { GroupList } from "../Components/GroupList/GroupList";
export const GroupListPage = () => {
  return (
    <Theme>
      <Navbar />
      <GroupList />
    </Theme>
  );
};
