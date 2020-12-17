import { Link } from "react-router-dom";
function Booking(props) {
  const date = props.date;
  const desc = props.desc;
  const id = props.id;
  return (
    <li className="booking">
      <div className="booking-left">
        <div className="booking-date__container">
          <h4 className="booking-date__title">Transit Dates:</h4>
          <p className="booking-date__text">{date}</p>
        </div>
        <div className="booking-description__container">
          <h4 className="booking-description__title">Description:</h4>
          <p className="booking-description__text">{desc}</p>
        </div>
      </div>

      <div className="booking-details__container  booking-details__container--btn">
        <Link to={`/edit/${id}`}>
          <button className="booking-details__btn">Edit</button>
        </Link>
      </div>
    </li>
  );
}

export default Booking;
