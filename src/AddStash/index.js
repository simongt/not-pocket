import React, { Component } from "react";
import "./style.css";

// AddStash is formatted as a toggled aside
class AddStash extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stash_url: "",
      is_public: false,
      user_id: 0, // ?
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

    fetch('/stashes', {
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
    return (

    );
  }
}

export default AddStash;
