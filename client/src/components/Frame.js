import React, { Component } from "react";
import "../stylesheets/Frame.css";

export default class Frame extends Component {
  render() {
    return (
      <div className="frame-container">
        <div className="group">
          <div className="user-group">Alan Lambert</div>
          <div className="vector-group">
            <i className="fas fa-caret-down"></i>
          </div>
        </div>
      </div>
    );
  }
}
