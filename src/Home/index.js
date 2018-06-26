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
    }
  }


  componentDidMount() {
    // let id = this.props.match.params.id;
    fetch(`/stashPublic.json`)
      .then(response => response.json())
      .then(stashes => {
        this.setState({
          stashes: stashes.reverse()
        });
      });
  }



  render() {

    return (
      <div className="Home">
        {this.state.stashes.map(stash => {
          return <Stash stash={stash}
            key={stash.stash_id}
            userLoggedIn={this.props.userLoggedIn}
          />
        })}

      </div>
    )
  }
}


export default Home;
