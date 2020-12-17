function FeesCard() {
  return (
    <section className="fees-section">
      <div className="fees-container">
        <h2 className="fees-section__title">Fees Breakdown</h2>
      </div>
      <div className="fees-subcontainer">
        <h4 className="fees-title">Transit Fee </h4>
        <p>$10,000</p>
      </div>
      <div className="fees-subcontainer">
        <h4 className="fees-title">Agency Fee </h4>
        <p>$2,000</p>
      </div>
      <div className="fees-subcontainer">
        <h4 className="fees-title">Total Amount </h4>
        <p>$12,000</p>
      </div>
    </section>
  );
}
export default FeesCard;
