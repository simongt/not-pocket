import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Burger from "../Burger";
import "./style.css";


class Header extends Component {
  

    render() {
      return (
        <body>
          <div className="header">
          <div>
            <img className="img" src="./not-pocket.png" />
            <h1>notpocket</h1>
            </div>
            <nav>
              <p> {this.props.placeholder} </p>
            </nav>
            <Burger onUserLoggedIn={this.props.onUserLoggedIn} />
        </div>
      </body>
  )

  }}


  export default Header;
