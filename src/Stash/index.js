import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";

class Stash extends Component {
  render() {
    return (
      <div className="Stash">
        <div className="card">
            <div>
            <a className="stash-link" href={this.props.stash.stash_url} target="_blank">
              <img className="stash-img" src={this.props.stash.card_image_url} alt={this.props.stash.card_site_name} />
            </a>
            </div>

          <h4>
            <a href={this.props.stash.stash_url} target="_blank" class="link-tag">
              {this.props.stash.card_title}
            </a>
            &nbsp;<i>({this.props.stash.card_site_name})</i>
          </h4>
          <p>{this.props.stash.card_description}</p>
          {/* <p>tags here</p> //we dont have time for tags */}
        </div>
      </div>
      )}
}

export default Stash;

