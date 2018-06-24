import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Burger from "../Burger";
import "./style.css";


class Header extends Component {
    render() {
      return (
        <div className="Header">
          <h1>NotPocket</h1>
            <nav>
              <p> {this.props.placeholder} </p>
            </nav>
            <Burger />
      </div>
  )

  }}
  
  
  export default Header;
