import { createGlobalStyle } from "styled-components";

import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize};
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,h2,h3,h4,h5,h6,input {
    font-family: "Roboto", sans-serif;
  }

 a {
    text-decoration:none;
  }

  body {
    font-family: "Roboto", sans-serif;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.text};
   
  }

`;
