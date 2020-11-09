import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home";
import Input from "./views/Input/Input"
import History from "./views/History/History"
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import Login from "./views/Login/Login"
const App = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Input" component={Input} />
        <Route exact path="/Input" component={History} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
