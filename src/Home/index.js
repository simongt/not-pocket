import React, { Component } from "react";
import "./style.css";
import Header from "../Header";
import Login from "../Login";
import AddStash from "../AddStash"
import Footer from "../Footer";
import Stash from "../Stash";
import Register from "../Register"
import { SSL_OP_PKCS1_CHECK_1 } from "constants";

class Home extends Component {

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
      userId: user.id
    });
  }

  componentDidUpdate() {
    // let id = this.props.match.params.id;
    if (this.state.userLoggedIn === false) {
      fetch(`/stashPublic.json`)
        .then(response => response.json())
        .then(stashes => {
          this.setState({
            stashes
          });
        });
    } else {
      fetch(`/byUser/${this.state.userId}.json`)
        .then(response => response.json())
        .then(stashes => {
          this.setState({
            stashes
          });
        });
    }
  }

  render() {
    if (!this.state.userLoggedIn) {
      return (<div className="Home">
        <Header placeholder="need to log in " />
        <Login onUserLoggedIn={this.updateUserLoggedIn} />
        <Register onUserLoggedIn={this.updateUserLoggedIn} />
        {this.state.stashes.map(stash => {
          return <Stash stash={stash} key={stash.stash_id} />
        })}        <Footer />
      </div>)

    }
    return (
      <div className="Home">
        <Header placeholder="Logged in" />
        <AddStash />
        {this.state.stashes.map(stash => {
          return <Stash stash={stash} key={stash.stash_id} />
        })}
        <Footer />
      </div>
    )
  }
}

export default Home;
