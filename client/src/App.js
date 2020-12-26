import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loginPage from "./components/views/loginPage/loginPage";
import register from "./components/views/registerPage/registerPage";
import landingPage from "./components/views/landingPage/landingPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/login" component={loginPage} />
          <Route exact path="/register" component={register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
