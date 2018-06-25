import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";


class Stash extends Component {
  render() {
    console.log(this.props.stash);
    return (
      <body>
        <div className="Stash">
          <div className="card">
            <img src={this.props.stash.card_image_url} alt={this.props.stash.card_site_name} />
            <div className="container">
              <h4><b>{this.props.stash.card_site_name}</b></h4>
              <div>
              <a href={this.props.stash.stash_url}> {this.props.stash.stash_url}</a>
              </div>
              <p>{this.props.stash.card_description}</p>
              <p>tags here</p>
            </div>
          </div>
        </div>

      </body>
    )

  }

}









export default Stash;

