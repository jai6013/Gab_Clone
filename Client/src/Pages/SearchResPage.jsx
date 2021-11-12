import React from "react";
import { Navbar } from "../Components/Navbar/NavBar";
import { Search } from "../Components/Search/Search";
import { Theme } from "../Styles/Theme";

export const SearchResPage = () => {
  return (
    <>
      <Theme>
        <Navbar />
        <Search />
      </Theme>
    </>
  );
};
