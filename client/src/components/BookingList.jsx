import Booking from "./Booking";

function BookingList(props) {
  const bookingsList = props.list;
  return (
    <section>
      <div className="booking-list__main-title-section">
        <h2 className="booking-list__main-title">Transits</h2>
      </div>

      <ul>
        {bookingsList.map((bookingItem) => {
          return (
            <Booking
              key={bookingItem.id}
              date={bookingItem.date}
              desc={bookingItem.description}
              id={bookingItem.id}
            />
          );
        })}
      </ul>
    </section>
  );
}
export default BookingList;