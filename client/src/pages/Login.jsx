import React from "react";
import Navbar from "../components/Navbar";
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
        <Navbar />
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
          <div className="login-container">
            <div>
              <button className="login-btn" type="submit">
                Log in
              </button>
              <input type="checkbox" name="remember" />
              <label className="login-checkbox__text">Remember me</label>
            </div>
            <div className="login-container__remember">
              <div>
                <button className="login-container__remember-btn">
                  Cancel
                </button>
              </div>

              <Link className="nav-link" to="./register">
                <p>Register</p>
              </Link>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
