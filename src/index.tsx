import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./theme/globalStyle";
import { DefaultTheme, ThemeProvider } from "styled-components";
import mainTheme from "./theme/theme";
import { MoviesProvider } from "./state/context";

import "@fontsource/montserrat";

ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
      <ThemeProvider theme={mainTheme as DefaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </MoviesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
