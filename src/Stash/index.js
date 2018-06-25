import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";

class Stash extends Component {
  render() {
    return (
      <div className="Stash">
        <div className="card">
            <a href={this.props.stash.stash_url} target="_blank">
              <img src={this.props.stash.card_image_url} alt={this.props.stash.card_site_name} />
            </a>

          <h4>
            <a href={this.props.stash.stash_url} target="_blank">
              {this.props.stash.card_title}
            </a>
            &nbsp; <i>({this.props.stash.card_site_name})</i>
          </h4>
          <p>{this.props.stash.card_description}</p>
          <p>tags here</p>
        </div>
      </div>
      )}
}

export default Stash;

