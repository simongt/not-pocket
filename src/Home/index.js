import React, { Component } from "react";
import "./style.css";
import Header from "../Header";
import AddStash from "../AddStash"
import Footer from "../Footer";

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      username: "",
      password_digest: "",
      stash_url: "",
      is_public: "",
      stash_url: "",
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    // fetch(`/board_games/${id}.json`)
      .then(response => response.json())
      .then(boardGame => {
        this.setState({
          // id: boardGame.id,
          // imgUrl: boardGame.img_url,
          // title: boardGame.title,
          // description: boardGame.description
        });
      });
  }


  render() {
    return (
      <div className = "Home">
      <Header />
      <AddStash />
      <Footer />
      </div>
    )
  }
}






export default Home;
