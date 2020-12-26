import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loginPage from "./components/views/loginPage/loginPage";
import register from "./components/views/registerPage/registerPage";
import landingPage from "./components/views/landingPage/landingPage";
import Auth from "./hoc/auth"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(landingPage, null )} />
          <Route exact path="/login" component={Auth(loginPage, false)} />
          <Route exact path="/register" component={Auth(register, false)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
