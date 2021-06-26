import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(to right, #141e30, #243b55);
  }

  button {
    cursor: pointer;
  }
`;