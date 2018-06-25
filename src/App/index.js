import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";
import Home from "../Home";
import Personal from "../Personal";
import Header from "../Header";
import Login from "../Login";
import AddStash from "../AddStash"
import Footer from "../Footer";
import Stash from "../Stash";
import Register from "../Register"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stashes: [],
      userLoggedIn: false,
    }
    this.updateUserLoggedIn = this.updateUserLoggedIn.bind(this);
  }

  updateUserLoggedIn(user) {
    this.setState({
      userLoggedIn: true,
      userId: user.userId
    });
  }


  render() {

    if (!this.state.userLoggedIn) {
      return (
        <Router>
          <div className="App">
            <Header onUserLoggedIn={this.updateUserLoggedIn} placeholder="need to log in " />
            <h1>These are public stashes</h1>
            <Home />
            <Footer />

          </div>
        </Router>
      )
    }
    return (
      <div className="App">
        <Header onUserLoggedIn={this.updateUserLoggedIn} placeholder="Logged In" />

        {/* The header on the next line is temporary */}
        <h1>These are personal stashes</h1>
        <AddStash />
        <Personal userId={this.state.userId} />
        <Footer />

      </div>
    )


  }


}

export default App;
