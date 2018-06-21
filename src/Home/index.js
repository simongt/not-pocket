import React, { Component } from "react";
import "./style.css";
import Header from "../Header";
import AddStash from "../AddStash"
import Footer from "../Footer";

class Home extends Component {
  render() {
    return (
      <div className = "Home">
      <Header />
      <AddStash />
      <Footer />
      </div>
    )
  }
}






export default Home;
