import React, {Component} from "react";
import "./style.css";
import Header from "../Header";
import Login from "../Login";
import AddStash from "../AddStash"
import Footer from "../Footer";
import Stash from "../Stash";
import Register from "../Register"


class Personal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stashes: [],
      deletion: false,
      newStash: false,
    }
    this.handleDeletion = this.handleDeletion.bind(this);
    this.handleNewStash = this.handleNewStash.bind(this);
  }
  handleDeletion() {
    this.setState({
      deletion: true
    })
  }

  handleNewStash() {
    this.setState({
      newStash: true,
    })
  }

  componentDidUpdate() {
    if (this.state.deletion === true || this.state.newStash === true) {
      fetch(`/byUser/${this.props.userId}.json`)
        .then(response => response.json())
        .then(stashes => {
          this.setState({
            stashes: stashes.reverse(),
            deletion: false,
            newStash: false,
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
          stashes: userStashes.reverse()
        });
      });
  }

  render() {

    return (
      <div className="Personal">

      {/* <button className="home-button"><a className="home-link" href="Home"> Return to Public Stash </a></button> */}

      <AddStash
        userId={this.props.userId}
        handleNewStash={this.handleNewStash}
      />
      {this.state.stashes.map(stash => {
        return <Stash
          handleDeletion={this.handleDeletion}
          handleNewStash={this.handleNewStash}
          stash={stash}
          key={stash.stash_id}
          userLoggedIn={this.props.userLoggedIn}
        />
      })
      } </div>

    )
  }
}

export default Personal;
