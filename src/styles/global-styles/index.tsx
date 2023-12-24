import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    transition: 200ms;
  }
  
  body {
    font-family: 'Ubuntu', sans-serif;
    background-color: hsl(0, 0%, 100%); // REMOVE THIS LINE BEFORE PUSH
    color: hsl(231, 11%, 63%);
    line-height: 2em;
  }
  
  button {
    border-radius: 5px;
  }

  input {
    border: 1px solid hsl(229, 24%, 87%);
    color: hsl(229, 24%, 87%);
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;

    &::placeholder {
      color: hsl(229, 24%, 87%);
    }
  }

  p {
    line-height: 1.3em;
    margin-bottom: 0.5em;
  }
`;

export { GlobalStyle };
