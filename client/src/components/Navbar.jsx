import { Link } from "react-router-dom";
import UserIcon from "../assets/user.svg";
function Navbar() {
  return (
    <nav className="navbar">
      <section className="navbar-logo">
        <div></div>
      </section>
      <section className="navbar-options">
        <p className="navbar-options__item">About</p>
        <p className="navbar-options__item">Services</p>
        <p className="navbar-options__item">Contact</p>
      </section>
      <section className="navbar-btn">
        <Link to="./login">
          <p className="navbar-btn__login">Login</p>
        </Link>
      </section>
    </nav>
  );
}

export default Navbar;
