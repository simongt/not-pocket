import React, { Component } from "react";
import "./style.css";
import Header from "../Header";
import AddStash from "../AddStash"
import Footer from "../Footer";

class Public extends Component {
  render() {
    return (
      <div className = "Public">
      <Header />
      <AddStash />
      <Footer />
      </div>
    )
  }
}






export default public;
