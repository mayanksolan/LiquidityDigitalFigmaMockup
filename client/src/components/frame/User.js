import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div className="group">
        <div className="user-group">{this.props.user[0].userName}</div>
        <div className="vector-group">
          <i className="fas fa-caret-down arrow"></i>
        </div>
      </div>
    );
  }
}
