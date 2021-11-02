import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../Contexts/ThemeContext";
import { lightTheme, darkTheme } from "../Themes/default";

export const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
