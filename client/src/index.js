import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/profile" component={Profile}></Route>
      </switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
