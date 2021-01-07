import { Link } from "react-router-dom";
import UserIcon from "../assets/user.svg";
import { useState } from "react";

function Navbar() {
  function logout() {
    sessionStorage.removeItem("authToken");
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo-options__container">
        <Link to="/">
          <section className="navbar-logo"></section>
        </Link>
        <section className="navbar-options">
          <Link to="/about">
            <p className="navbar-options__item">ABOUT</p>
          </Link>
          <Link to="/services">
            <p className="navbar-options__item">SERVICES</p>
          </Link>
          <Link to="/contact">
            <p className="navbar-options__item">CONTACT</p>
          </Link>
        </section>
      </div>

      <section className="navbar-btn">
        {!sessionStorage.getItem("authToken") ? (
          <Link to="./login">
            <p className="navbar-btn__login">Login</p>
          </Link>
        ) : (
          <Link to="/">
            <p onClick={logout} className="navbar-btn__login">
              Logout
            </p>
          </Link>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
