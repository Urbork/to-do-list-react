import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    background-color: whitesmoke;
    font-family: "Montserrat", sans-serif;
    word-break: break-word;
  }
`;
