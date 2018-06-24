//Form for Registration

import React, { Component } from "react";
import "./style.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(evt) {
    const name = evt.target.getAttribute('name');
    const value = evt.target.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const userInfo = {
      username: this.state.username,
      password: this.state.password,
    }
    console.log(userInfo)
    fetch('/register', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(jsonResp => {
        console.log(jsonResp)
        if (jsonResp.response === "SUCCESS") {
          console.log("REGISTERED")
          this.props.onUserLoggedIn(jsonResp)
        } else {
          console.log("PW DIDN'T MATCH")
        }
      })
  }


  render() {
    return (
        <div className="register">
          <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
            <h2>Want to start stashing? Sign up!</h2>
            <p>Username <input type="email" name="username" required value={this.state.username} /></p>
            <p>Password <input type="password" name="password" required value={this.state.password} /></p>
            <p><input type="submit" value="submit" /></p>
          </form>
        </div>
    )
  }
}


export default Register;
