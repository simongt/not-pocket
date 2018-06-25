//Form for authentication

import React, { Component } from "react";
import "./style.css";

class Login extends Component {
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
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(jsonResp => {
        console.log(`inside the login.jsx the response from server.js was ${jsonResp}`)
        console.table(jsonResp)
        if (jsonResp.response === "SUCCESS") {
          this.props.onUserLoggedIn(jsonResp)
        } else {
          console.log("PW DIDN'T MATCH")
        }
      })
  }

  render() {
    return (
        <div className="Login">
          <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
            <h2>Log In</h2>
            <p><input type="email" name="username" placeholder="Email or Username"required value={this.state.username} /></p>
            <p><input type="password" name="password" placeholder="Password" required value={this.state.password} /></p>
            <p><input className="button" type="submit" value="Log in" /></p>
          </form>
        </div>
    )
  }
}


export default Login;
