import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import Login from "../Login";
import Register from "../Register";
import "./style.css";

class Burger extends Component {
  render() {
    return (
      <div className="Burger">
        <Menu right>
          <a id="home" className="menu-item" href="/">Home</a>
          <Login />
          <Register />
        </Menu>
      </div>
    )
  }
}

export default Burger;
