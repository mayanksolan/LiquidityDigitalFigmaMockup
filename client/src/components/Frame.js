import React, { Component } from "react";
import "../stylesheets/Frame.css";
import User from "./User";

export default class Frame extends Component {
  render() {
    //const { userId, userName } = this.props.issuance;
    console.log(this.props.issuance);
    return (
      <div className="frame-container">
        <User user={this.props.user} />
      </div>
    );
  }
}
