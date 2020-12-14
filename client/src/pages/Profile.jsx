import React from "react";
const axios = require("axios");
class Profile extends React.Component {
  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    axios.get(`http://localhost/5000/users`).then((response) => {
      console.log(response);
    });
  };
  render() {
    return <section></section>;
  }
}

export default Profile;
