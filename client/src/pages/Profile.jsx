import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import BookingList from "../components/BookingList";
import ProfileDetails from "../components/ProfileDetails";
class Profile extends React.Component {
  state = {
    userData: {},
    bookingList: [],
  };

  componentDidMount() {
    if (
      sessionStorage.getItem("authToken") &&
      sessionStorage.getItem("userId")
    ) {
      console.log("authToken and userid exists");
      this.getUser(sessionStorage.getItem("userId"));
    }
  }

  getUser = (id) => {
    axios
      .get(`http://localhost:5000/users/${id}`, {
        header: {
          authorization: `BEARER ${sessionStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        this.setState({
          userData: response.data,
          bookingList: response.data.bookings,
        });
        console.log(this.state.userData, this.state.bookingList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <section>
        <Navbar />
        <div className="profile-main__section">
          <h1 className="profile-main__title">Profile Information</h1>
        </div>
        <ProfileDetails data={this.state.userData} />
        <BookingList list={this.state.bookingList} />
      </section>
    );
  }
}

export default Profile;
