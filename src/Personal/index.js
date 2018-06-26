import React, {
  Component
} from "react";
import "./style.css";
import Header from "../Header";
import Login from "../Login";
import AddStash from "../AddStash"
import Footer from "../Footer";
import Stash from "../Stash";
import Register from "../Register"
import {
  SSL_OP_PKCS1_CHECK_1
} from "constants";

class Personal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stashes: [],
      deletion: false,
    }
    this.handleDeletion = this.handleDeletion.bind(this);
  }
  handleDeletion() {
    this.setState({
      deletion: true
    })
  }

  componentDidUpdate() {
    if (this.state.deletion === true) {
      fetch(`/stashPublic.json`)
        .then(response => response.json())
        .then(stashes => {
          this.setState({
            stashes: stashes.reverse(),
            deletion: false,
          });
        });
    }
  }

  componentDidMount() {
    console.log("mounted")
    fetch(`/byUser/${this.props.userId}.json`)
      .then(response => response.json())
      .then(userStashes => {
        console.table(userStashes)
        this.setState({
          stashes: userStashes
        });
      });
  }

  render() {

    return ( <
      div className = "Personal" > {
        this.state.stashes.map(stash => {
          return <Stash
          handleDeletion = {
            this.handleDeletion
          }
          stash = {
            stash
          }
          key = {
            stash.stash_id
          }
          userLoggedIn = {
            this.props.userLoggedIn
          }
          />
        })
      } <
      /div>
    )
  }
}

export default Personal;