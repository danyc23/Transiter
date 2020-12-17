import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewBooking from "./pages/NewBooking";
import Edit from "./pages/Edit";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/newbooking" component={NewBooking} />
      <Route path="/edit/:id" component={Edit} />
    </Switch>
  </Router>,

  document.getElementById("root")
);
