import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalStyle } from "./styles/global-styles/index.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/defaultTheme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />

    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
