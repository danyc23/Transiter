import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProfileDetails from "../components/ProfileDetails";
import FeesCard from "../components/FeesCard";
import Navbar from "../components/Navbar";

class NewBooking extends React.Component {
  state = {
    date: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.date || !this.state.description) {
      alert("All spaces must be filled");
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
      this.createBooking(sessionStorage.getItem("userId"));
      e.target.reset();
    }
  };

  createBooking = (id) => {
    const { date } = this.state;
    const { description } = this.state;
    const user_id = sessionStorage.getItem("userId");
    axios.post(`http://localhost:5000/bookings/${id}`, {
      user_id,
      date,
      description,
    });
    this.setState({
      date: "",
      description: "",
    });
  };

  render(props) {
    return (
      <section className="new-booking">
        <Navbar />
        <form onSubmit={this.handleSubmit} className="new-booking__container">
          <div className="new-booking__title-container">
            <h2 className="new-booking__title">Book Transit</h2>
          </div>
          <div>
            <h4 className="new-booking__label"> Transit dates:</h4>
            <input
              onChange={this.handleChange}
              className="new-booking__input"
              type="date"
              name="date"
            />
          </div>
          <div className="container">
            <h4 className="new-booking__label ">Extra details:</h4>
            <textarea
              onChange={this.handleChange}
              name="description"
              className="new-booking__input new-booking__input--desc "
            ></textarea>
          </div>
          <FeesCard />
          <div className="new-booking__btn-container">
            <button type="submit" className="new-booking__btn">
              BOOK
            </button>
            <Link to="/profile">
              <button className="new-booking__btn">CANCEL</button>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}

export default NewBooking;
