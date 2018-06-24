import React, { Component } from "react";
import "./style.css";


class Header extends Component {
  render() {
    return (
      <div className="header">
          <aside id="mySidebar">
            <button onClick="toggle_close()" className="bar-header">Close &times;</button>

          </aside>

          <header className="teal">
            <button className="hambuger  teal  xlarge" onClick="toggle_open()">☰</button>
            <nav>
              <p> {this.props.placeholder} </p>
            </nav>
          </header>
      </div>
  )}
}
export default Header;
