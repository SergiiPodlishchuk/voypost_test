import React, { Suspense } from "react";
// import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import "fontsource-roboto";

import theme from "./common/theme.js";

import Buttons from "./components/Buttons/Buttons";
import TextFields from "./components/TextFields/TextFields";
import TypographyComp from "./components/Typography_comp/Typography_comp";

function App() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Buttons />
        <TypographyComp />
        <TextFields />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
