import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-subscription">
        <h3 className="footer-subscription__title">STAY CONNECTED</h3>
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
          <button className="footer-subscription-btn">SIGN UP</button>
        </div>
      </section>
      <section className="footer-commitment ">
        <h3 className="footer-commitment__title">OUR COMMITMENTS</h3>
        <p className="footer-commitment__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          doloremque nobis aut ab sit sequi asperiores deserunt temporibus, rem
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
