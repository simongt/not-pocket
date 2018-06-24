import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import "./style.css";

class Burger extends Component {
  render() {
    return (
      <div className="Burger">
        <Menu customBurgerIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png" />} />
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
        </Menu>
      </div>
    )
  }
}


export default Burger;
