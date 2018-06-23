import React, { Component } from "react";
import "./style.css";
import Header from "../Header";
import Login from "../Login";
import AddStash from "../AddStash"
import Footer from "../Footer";
import Stash from "../Stash";
import { SSL_OP_PKCS1_CHECK_1 } from "constants";

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stashes: [],
    }
  }

  componentDidMount() {
    // let id = this.props.match.params.id;
    fetch(`/stashAll.json`)
    .then(response => response.json())
      .then(stashes => {
        this.setState({
          stashes
        });
      });
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <Login />
        <AddStash />
        {this.state.stashes.map(stash => {
          return <Stash stash={stash}/>
        })}
        <Footer />
      </div>
    )
  }
}

export default Home;
