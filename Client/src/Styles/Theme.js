import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../Contexts/ThemeContext";
import { lightTheme, darkTheme } from "../Themes/default";
import { GlobalStyles } from "./Global";

export const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
