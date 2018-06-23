import React, { Component } from "react";
import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import AddStash from "../AddStash";
import Stash from "../Stash";



class Personal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      stash_url: "",
      user_id: "",
    }
  }

  // componentDidMount() {
  //   // let id = this.props.match.params.id;
  //   fetch(`/stash.json`)
  //     .then(response => response.json())
  //     .then(stsh => {
  //       this.setState({
  //         // id: stsh.id,
  //         stash_url: stsh.stash_url,
  //         user_id: stsh.user_id,
  //       });
  //     });
  // }

  render() {
    return (
      <div className="Personal">

        <Header />

        {/* <AddStash />
        <Stash /> */}
        
        <Footer />

        </div>
    )
  }
}



export default Personal;
