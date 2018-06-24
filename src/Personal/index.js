import React, { Component } from "react";
import "./style.css";
import Header from "../Header";
import Login from "../Login";
import AddStash from "../AddStash"
import Footer from "../Footer";
import Stash from "../Stash";
import Register from "../Register"
import { SSL_OP_PKCS1_CHECK_1 } from "constants";

class Personal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stashes: [],
    }
  }


  componentDidMount() {
    console.log("mounted")
    fetch(`/byUser/${this.props.userId}.json`)
      .then(response => response.json())
      .then(userStashes => {
        this.setState({
          stashes : userStashes
        });
      });
  }

  render() {

    return (
      <div className="Personal">
        {this.state.stashes.map(stash => {
          return <Stash stash={stash} key={stash.stash_id} />
        })}
      </div>
    )
  }
}

export default Personal;
