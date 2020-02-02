import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../../containers/login";
import Home from "../../containers/home";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
