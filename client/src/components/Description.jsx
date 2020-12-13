import Card from "./Card";
function Description() {
  return (
    <section className="description">
      <div className="card-container">
        <Card text="Book Now!" />
      </div>
      <div className="card-container">
        <Card text="It's Fast" />
      </div>
      <div className="card-container">
        <Card text="The best Fare" />
      </div>
    </section>
  );
}
export default Description;
