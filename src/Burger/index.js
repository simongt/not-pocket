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
        <Menu right customBurgerIcon={<img src="http://www.stickpng.com/assets/images/585e4be1cb11b227491c3398.png" /> }>
          <Login onUserLoggedIn={this.props.onUserLoggedIn} />
          <Register onUserLoggedIn={this.props.onUserLoggedIn} />
        </Menu>
      </div>
    )
  }
}

export default Burger;
