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
          <button>SIGN UP</button>
        </div>

        <div className="footer-social-media">
          <img src="" alt="facebook" />
          <img src="" alt="twitter" />
          <img src="" alt="linkedin" />
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
        <p className="footer-navigate__item">About Us</p>
        <p className="footer-navigate__item">Careers</p>
        <p className="footer-navigate__item">Contact Us</p>
        <p className="footer-navigate__item">News</p>
      </section>
    </footer>
  );
}
export default Footer;
