import React, { Component } from "react";
import "./style.css";

class Stash extends Component {
  render() {
    return (
      <div className="Stash">
        <h1>{this.props.stash.stash_url}</h1>
      </div>
    )
  }
}

export default Stash;
