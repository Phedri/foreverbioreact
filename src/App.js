import React from "react";
import "./css/App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
