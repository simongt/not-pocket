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

  componentDidMount() {
    // let id = this.props.match.params.id;
    fetch(`/stashPublic.json`)
      .then(response => response.json())
      .then(stashes => {
        this.setState({
          stashes
        });
      });
  }

  render() {
    if (!this.state.userLoggedIn) {
     return ( <div className="Home">
        <Header />
       <Login onUserLoggedIn={this.updateUserLoggedIn} />
       <Register onUserLoggedIn={this.updateUserLoggedIn}/>
       {this.state.stashes.map(stash => {
         return <Stash stash={stash} />
       })}        <Footer />
        </div>)

    }
    return (
      <div className="Home">
        <Header />
        <Login />
        <Register />
        <AddStash />
        {this.state.stashes.map(stash => {
          return <Stash stash={stash} />
        })}
        <Footer />
      </div>
    )
  }
}

export default Home;
