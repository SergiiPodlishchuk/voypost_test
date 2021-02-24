import React, { Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import "fontsource-roboto";

import { Container } from "@material-ui/core";
import theme from "./common/theme.js";

import Buttons from "./components/Buttons/Buttons";
import TextFields from "./components/TextFields/TextFields";
import TypographyComp from "./components/Typography_comp/Typography_comp";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <CssBaseline />
          <nav>
            <Link to="/story-book" className="route">
              story-book
            </Link>
            <Link to="/sign-up" className="route">
              sign-up
            </Link>
          </nav>
          <Switch>
            <Route
              path="/story-book"
              exact
              component={() => (
                <>
                  <Buttons />
                  <TextFields />
                  <TypographyComp />
                </>
              )}
            />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
