import Card from "./Card";
function Description() {
  return (
    <section className="description">
      <div className="card-container">
        <Card className="card-1 card" text="Book Now!" />
      </div>
      <div className="card-container">
        <Card className="card-2 card" text="It's Fast" />
      </div>
      <div className="card-container">
        <Card className="card-3 card" text="The best Fare" />
      </div>
    </section>
  );
}
export default Description;
