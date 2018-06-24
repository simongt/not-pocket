import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import "./style.css";

class Burger extends Component {
  render() {
    return (
      <div className="Burger">
        <button>☰</button>
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
        </Menu>
      </div>
    )
  }
}


export default Burger;
