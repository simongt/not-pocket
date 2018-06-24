import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="head">
          <p> {this.props.placeholder} </p>
        </div>
      </div>
    )
  }
}


export default Header;
