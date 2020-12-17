import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-subscription">
        <h3 className="footer-subscription__title">Stay Connected</h3>
        <p className="footer-subscription__text">
          Subscribe to receive the last updates from the Panama Canal
        </p>
        <div>
          <input
            className="footer-subscription__input"
            type="email"
            name="email"
            id="footer-email"
          />
          <button className="footer-subscription-btn">Sign Up</button>
        </div>
      </section>
      <section className="footer-commitment ">
        <h3 className="footer-commitment__title">Our Vision</h3>
        <p className="footer-commitment__text">
          Provide the best service to our clients by providing the best rates in
          a timely manner to ensure a smooth transit through the Panama Canal.
        </p>
      </section>
      <section className="footer-navigate">
        <h3 className="footer-navigate__title">Navigate</h3>
        <Link to="/">
          <p className="footer-navigate__item">About Us</p>
        </Link>
        <Link>
          <p className="footer-navigate__item">Careers</p>
        </Link>
        <Link>
          <p className="footer-navigate__item">Contact Us</p>
        </Link>
        <Link>
          <p className="footer-navigate__item">News</p>
        </Link>
      </section>
    </footer>
  );
}
export default Footer;
