import React from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
const axios = require("axios");

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    loggedIn: false,
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (!this.state.email || !this.state.password) {
      alert("Type password and email ");
    } else {
      axios
        .post("http://localhost:5000/users/login", {
          email: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          console.log(res);
          sessionStorage.authToken = res.data.token;
        });
    }
  };

  render() {
    return (
      <section className="login">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={this.submitHandler}>
          <div className="login-container">
            <label className="login-label" for="email">
              Email
            </label>
            <input
              onChange={this.changeHandler}
              className="login-input"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="login-container">
            <label className="login-label" for="password">
              Password
            </label>
            <input
              onChange={this.changeHandler}
              className="login-input"
              type="password"
              name="password"
              id="password"
            />
          </div>

          <button className="login-btn" type="submit">
            Log in
          </button>
        </form>
        <Link to="./register">
          <p className="login-link">Register</p>
        </Link>
      </section>
    );
  }
}

export default Login;
