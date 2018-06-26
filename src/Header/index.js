import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Burger from "../Burger";
import "./style.css";


class Header extends Component {


  render() {
    return (
        <div className="header">
          <div>
            <img className="img" src="https://i.imgur.com/m0tQ9hD.png" />
            <h1>notpocket</h1>
          </div>
          <nav>
            {/* <p> {this.props.placeholder} </p> */}
          </nav>
          <Burger
            onUserLoggedIn={this.props.onUserLoggedIn}
            userLoggedIn={this.props.userLoggedIn}
          />
        </div>
    )

  }
}


export default Header;
