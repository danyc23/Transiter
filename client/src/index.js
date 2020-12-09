import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact component={App}></Route>
      {/* <Route path="/login" component={}></Route>
      <Route path="/user/:id" component={}></Route>
      <Route path="/user/:id/transit" component={}></Route>
      <Route path="/admin" component={}></Route> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
