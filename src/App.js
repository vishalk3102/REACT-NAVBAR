import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route  path="/about">
        <About />
      </Route>

      <Route  path="/service">
        <Service />
      </Route>

      <Route  path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};
export default App;
