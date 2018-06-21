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

  render() {
    return (

    );
  }
}

export default AddStash;
