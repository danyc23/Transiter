import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <section className="navbar-logo">
        <h3>Transiter</h3>
      </section>
      <section className="navbar-options">
        <p className="navbar-options__item">About</p>
        <p className="navbar-options__item">Services</p>
        <p className="navbar-options__item">Contact</p>
      </section>
      <section className="navbar-btn">
        <Link to="./login">
          <button className="navbar-btn__login">Login</button>
        </Link>

        <Link to="register">
          <button className="navbar-btn__register">Register</button>
        </Link>
      </section>
    </nav>
  );
}

export default Navbar;
