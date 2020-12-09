function Card(props) {
  return (
    <div className="card">
      <div className={props.src}></div>
      <div className="card-text">{props.text}</div>
    </div>
  );
}
export default Card;
