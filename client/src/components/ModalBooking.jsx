// import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// class ModalBooking extends React.Component {
//   state = {
//     date: "",
//     description: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (!this.state.date || !this.state.description) {
//       alert("All spaces must be filled");
//     } else {
//       this.setState({
//         [e.target.name]: e.target.value,
//       });
//       this.createBooking(sessionStorage.getItem("userId"));
//       console.log(this.state.date);
//     }
//   };

//   createBooking = (id) => {
//     const { date } = this.state;
//     const { description } = this.state;
//     const user_id = sessionStorage.getItem("userId");
//     axios.post(`http://localhost:5001/bookings/${id}`, {
//       user_id,
//       date,
//       description,
//     });
//     this.setState({
//       date: "",
//       description: "",
//     });
//   };

//   render() {
//     return (
//       <section className="modal">
//         <div className="modal-main">
//           <div className="modal-title__section">
//             <h2 className="modal-title">Book Transit</h2>
//           </div>

//           <label className="modal-label"> Transit dates:</label>
//           <input
//             onChange={this.handleChange}
//             className="modal-input"
//             type="date"
//             name="date"
//           />
//           <label className="modal-label"> Extra details:</label>
//           <textarea
//             onChange={this.handleChange}
//             name="description"
//             className="modal-input modal-input__textarea"
//           ></textarea>
//           <button onClick={this.handleSubmit} className="modal-btn">
//             BOOK
//           </button>
//           <button className="modal-btn modal-btn__cancel">CANCEL</button>
//         </div>
//       </section>
//     );
//   }
// }

// export default ModalBooking;
