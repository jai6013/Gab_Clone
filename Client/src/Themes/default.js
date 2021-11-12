// These are themes to pass to ThemeProvider by styled-components

export const lightTheme = {
  fonts: {
    primary: "Roboto, sans-serif",
  },
  colors: {
    primary: "#21CF7A",
    background2: "#FFFFFF",
    background1: "#F0F2F5",
    background3: "#F0F2F5",
    text: "#000000",
    text2: "#4b4f55",
    input: "#000000",
    inverted: "#FFFFFF",
    button: "#E2E8EC",
  },

  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
  boxshadow: " 0 1px 2px rgb(0 0 0 / 10%)",
};

export const darkTheme = {
  fonts: {
    primary: "Roboto, sans-serif",
  },
  colors: {
    primary: "#21CF7A",
    background2: "#000000",
    background1: "#333333",
    background3: "#13171B",
    text: "#FFFFFF",
    text2: "#999",
    input: "#FFFFFF",
    inverted: "#000000",
    button: "#343434",
  },

  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
  boxshadow: " 0 1px 2px rgb(34 34 34 / 10%)",
};
