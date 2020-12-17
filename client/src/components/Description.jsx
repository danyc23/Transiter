import Card from "./Card";
import Boat from "../assets/barco.jpg";
import Clock from "../assets/reloj.jpeg";
import Money from "../assets/plata.jpg";
function Description() {
  return (
    <section className="description">
      <div className="card-container">
        <h2 className="card-container__title">24/7 Customer Service</h2>
        {/* <Card className="card-1 card" /> */}
        <img className="card-img" src={Boat} alt="boat" />
      </div>
      <div className="card-container">
        <h2 className="card-container__title">Save Time!</h2>
        {/* <Card className="card-2 card" /> */}
        <img className="card-img" src={Clock} alt="clock" />
      </div>
      <div className="card-container">
        <h2 className="card-container__title">Best Price Guaranteed! </h2>
        {/* <Card className="card-3 card" /> */}
        <img className="card-img" src={Money} alt="money" />
      </div>
    </section>
  );
}
export default Description;
