import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home";
import Calc from "./views/Calc/calc";
import NotFound from "./views/NotFound";
import Login from "./views/Login/Login"
const App = () => {

  return (
    <div className ="app-routes">
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Calculator" component={Calc} />
        <Route path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
