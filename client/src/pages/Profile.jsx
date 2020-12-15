import React from "react";
import axios from "axios";
class Profile extends React.Component {
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
        console.log(response.data.bookings);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return <section></section>;
  }
}

export default Profile;
