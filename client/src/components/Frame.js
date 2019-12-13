import React, { Component } from "react";
import "../stylesheets/Frame.css";
import User from "./User";
import Tabs from "./Tabs";
import Rectangle from "./Rectangle";

export default class Frame extends Component {
  render() {
    //const { userId, userName } = this.props.issuance;
    console.log(this.props.issuance);
    return (
      <div className="frame-container">
        <User user={this.props.user} />
        <div className="header">Deal Room</div>
        <Tabs />
        <Rectangle />
      </div>
    );
  }
}
