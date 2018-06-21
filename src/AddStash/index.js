import React, { Component } from "react";
import "./style.css";

// AddStash is formatted as a toggled aside
class AddStash extends Component {
  render() {
    return (
      <div className="AddStash">
        <form>
          <label> Enter URL </label>
          <input type="text" placeholder="Enter URL" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}






export default AddStash;
