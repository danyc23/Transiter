import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Footer from "./components/Footer";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <Description />
        <Footer />
      </div>
    );
  }
}

export default App;
