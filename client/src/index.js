import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewBooking from "./pages/NewBooking";
import Edit from "./pages/Edit";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/newbooking" component={NewBooking} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>,

  document.getElementById("root")
);
