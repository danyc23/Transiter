import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          The Future In The Maritime Industry Is Here
        </h1>
        <p className="hero-text">
          Leaders In Transit Bookings Through The Panama Canal.
        </p>
        <Link to="/login">
          <button className="hero-btn">Book Your Transit</button>
        </Link>
      </div>
    </section>
  );
}
export default Hero;
