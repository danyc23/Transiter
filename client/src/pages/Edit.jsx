import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default class Edit extends Component {
  state = {
    date: "",
    description: "",
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.date || !this.state.description) {
      alert("All spaces must be filled");
    } else {
      console.log("form-submitted");
      this.setState({
        [e.target.name]: e.target.value,
      });
      this.editBooking(this.props.match.params.id);
    }
    e.target.reset();
  };

  editBooking = (id) => {
    console.log(id);
    const { date } = this.state;
    const { description } = this.state;
    axios
      .put("http://localhost:5000/bookings/", {
        id,
        date,
        description,
      })
      .then((res) => {
        console.log(res);
        this.setState({
          date: "",
          description: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <section className="new-booking">
        <Navbar />
        <form onSubmit={this.handleSubmit} className="new-booking__container">
          <div className="new-booking__title-container">
            <h2 className="new-booking__title">Edit Transit</h2>
          </div>
          <div>
            <h4 className="new-booking__label"> Transit dates:</h4>
            <input
              onChange={this.changeHandler}
              className="new-booking__input"
              type="date"
              name="date"
            />
          </div>
          <div className="container">
            <h4 className="new-booking__label ">Extra details:</h4>
            <textarea
              onChange={this.changeHandler}
              name="description"
              className="new-booking__input new-booking__input--desc "
            ></textarea>
          </div>
          <div className="new-booking__btn-container">
            <button type="submit" className="new-booking__btn">
              EDIT
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
