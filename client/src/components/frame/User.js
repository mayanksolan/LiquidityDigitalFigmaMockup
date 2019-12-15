import React, { Component } from "react";
import PropTypes from "prop-types";

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

User.propTypes = {
  user: PropTypes.array.isRequired
};
