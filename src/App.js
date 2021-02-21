import React, { Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import "fontsource-roboto";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import theme from "./common/theme.js";

import Buttons from "./components/Buttons/Buttons";
import TextFields from "./components/TextFields/TextFields";
import TypographyComp from "./components/Typography_comp/Typography_comp";

function App() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <nav>
          <Link to="/buttons" className="route">
            Buttons
          </Link>
          <Link to="/textfield" className="route">
            TextFields
          </Link>
          <Link to="/typography" className="route">
            Typography
          </Link>
        </nav>
        <Switch>
          <Route path="/buttons" exact component={Buttons} />
          <Route path="/textfield" component={TextFields} />
          <Route path="/typography" component={TypographyComp} />
        </Switch>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
