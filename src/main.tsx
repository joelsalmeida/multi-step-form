import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalStyle } from "./styles/global-styles/index.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/defaultTheme.tsx";
import { Provider } from "react-redux";
import { store } from "././redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />

      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
