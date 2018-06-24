import React, { Component } from "react";
import "./style.css";

class Stash extends Component {
  render() {
    return (
      <body>
      <div className="Stash">
        <div className="container">
          <div>{this.props.stash.stash_url}</div>
        </div>
      </div>
      </body>
    )
  }
}

export default Stash;

