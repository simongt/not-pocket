import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { slide as Menu } from 'react-burger-menu';
import "./style.css";


class Header extends Component {
  showSettings (event) {
    event.preventDefault();
  }
    render() {
      return (
        <div className="Header">
      <h1>NotPocket</h1>
          <button className="hambuger  teal  xlarge" onClick="toggle_open()">☰</button>
      <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
              <button onClick="toggle_close()" className="bar-header">Close &times;</button>

            </Menu>

          <header className="teal">
            <nav>
              <p> {this.props.placeholder} </p>
            </nav>
          </header>
      </div>
  )}
}


export default Header;
