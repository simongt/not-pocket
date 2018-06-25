import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Burger from "../Burger";
import "./style.css";


class Header extends Component {
  

    render() {
      return (
        <body>
          <div className="header">
            <h1>NotPocket</h1>
            <nav>
              <p> {this.props.placeholder} </p>

            </nav>
            <Burger onUserLoggedIn={this.props.onUserLoggedIn} />
        </div>
      </body>
  )

  }}


  export default Header;
