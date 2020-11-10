import React, { useState } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home";
import Calc from "./views/Calc/calc";
import History from "./views/History/History";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";

const App = () => {

  return (
    <div>
      <NavBar />
      <Switch >
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Calculator" component={Calc} />
        <Route exact path="/History" component={History} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
