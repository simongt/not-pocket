import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";

class Stash extends Component {
  render() {
    console.log(this.props.stash);
    return <body>
        <div className="Stash">
        {/* <div className="container"> */}
          <div className="card">
           <img src={this.props.stash.card_image_url} alt={this.props.stash.card_site_name} />

          <div><a href={this.props.stash.stash_url} target="_blank"> {this.props.stash.card_site_name}</a></div>
              <div>{this.props.stash.card_description}</div>
              <div>tags here</div>

          </div>
        {/* </div> */}
        </div>
      </body>;
  }
}

export default Stash;
