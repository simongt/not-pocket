import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";

// AddStash is formatted as a toggled aside
class AddStash extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stash_url: "",
      is_public: true,
      // user_id: ? (how to add currently logged user's id here)
      created: false,
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(event) {
    const element = event.target;
    const name = element.name;
    const value = element.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const newStash = {
      stash_url: this.state.stash_url,
      is_public: this.state.is_public,
      user_id: this.state.user_id,
    }

    fetch('/add-stash', {
        method: "POST",
        body: JSON.stringify(newStash),
        headers: {
          "Content-type": "application/json"
        }
      }).then(response => response.json())
      .then(stash => {
        this.setState({
          created: true
        });
      });
  }

  render() {
    if (this.state.created === true) {
      return <Redirect to = "/" /> ;
    }
    return (
      <div className="AddStash">
        <h1>Stash A New URL</h1>
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <p>
            <label for="stash_url">URL</label>
            <input 
              type="url"
              name="stash_url"
              placeholder="http://"
              value={this.state.stash_url}
              />
          </p>

          <p>
            <label for="is_public">Public or private?</label>
            <input
              type="radio"
              name="is_public"
              checked
              value={this.state.is_public}
            /> public
            <input
              type="radio"
              name="is_private" 
              value={!(this.state.is_public)}
            /> private
          </p>

          <p>
            <input type="submit" value="Stash it!" />
          </p>
        </form>
      </div>
    );
  }
}

export default AddStash;
