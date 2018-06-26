import React, { Component } from "react";
import { Redirect, BrowserRouter as Router } from "react-router-dom";
import Stash from "../Stash";

import "./style.css";

// AddStash is formatted as a toggled aside
class AddStash extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stash_url: "",
      is_public: true,
      created: false,
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(event) {
    const element = event.target;
    const name = element.name;
    const value = element.value;
    const is_public = element.is_public;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const newStash = {
      stash_url: this.state.stash_url,
      is_public: this.state.is_public,
      user_id: this.props.userId,
    }

    fetch('/stash', {
      method: "POST",
      body: JSON.stringify(newStash),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(stash => {
        this.props.handleNewStash()
      });
  }

  render() {
    return (
      <div className="AddStash">
        <h1>Stash A New URL</h1>
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <p className="class-input">
            {/* <label htmlFor="stash_url">URL</label> */}
            <input
              type="url"
              name="stash_url"
              placeholder="http://enter-url"
              value={this.state.stash_url}
            />
          </p>
          <p id="move-radio">
            {/* <label htmlFor="is_public">Public or private?</label> */}
            <input
              type="radio"
              name="is_public"
              checked
              value="true"
            /> public
            <input
              type="radio"
              name="is_public"
              value="false"
            /> private
          </p>
          <p>
            <input className="button fix-button" type="submit" value="Stash it!" />
          </p>
        </form>
      </div>
    );
  }
}

export default AddStash;
