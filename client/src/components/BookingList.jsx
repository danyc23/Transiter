import Booking from "./Booking";

function BookingList(props) {
  const bookingsList = props.list;
  console.log(bookingsList);
  return (
    <ul>
      {bookingsList.map((bookingItem) => {
        return (
          <Booking
            key={bookingItem.id}
            date={bookingItem.date}
            desc={bookingItem.description}
          />
        );
      })}
    </ul>
  );
}
export default BookingList;
