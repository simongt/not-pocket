import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";
import Home from "../Home";
import Personal from "../Personal";

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
          <nav>
            <Link to="/" >Personal View</Link>
            <Link to="/Home" >Public View</Link>

          </nav>
          <Route path="/" exact component={Personal} />
          <Route path="/Home" exact component={Home} />
      </div>
    </Router>
    )
  }
}

export default App;
