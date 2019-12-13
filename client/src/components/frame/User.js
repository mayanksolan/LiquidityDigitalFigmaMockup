import React, { Component } from "react";

export default class User extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="group">
        <div className="user-group">{this.props.user[0].userName}</div>
        <div className="vector-group">
          <i className="fas fa-caret-down arrow"></i>
          <ul className="dropdown-content">
            {this.props.user.map(user => (
              <li key={user.userId}>{user.userName}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
