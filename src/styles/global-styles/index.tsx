import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    border: none;
    transition: 200ms;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
  }
  
  button {
    border-radius: 5px;
  }
`;

export { GlobalStyle };
