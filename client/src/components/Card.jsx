function Card(props) {
  return (
    <div className={props.className}>
      <div></div>
      <div className="card-text">{props.text}</div>
    </div>
  );
}
export default Card;
