import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";

class Stash extends Component {
  render() {
    return (
      <body>
        <div className="Stash">
          <div className="card">
            <img src="#" alt="img here" />
            <div className="container">
              <h4><b>Title</b></h4>
              <div><Link to="/{this.props.stash.stash_url}" >Read Article </Link></div>


              <p> tags here</p>
        </div>
      </div>
      </div>
      </body>
    )
  }
}








export default Stash;

