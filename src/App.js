import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default App;
