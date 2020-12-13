import React from "react";
import Description from "./components/Description";
import Footer from "./components/Footer";
import "./styles/app.css";
import Header from "./components/Header";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <Footer />
      </div>
    );
  }
}

export default App;
