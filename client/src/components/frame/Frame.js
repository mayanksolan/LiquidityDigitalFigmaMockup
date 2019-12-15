import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../stylesheets/Frame.css";
import User from "./User";
import Tabs from "./Tabs";
import Rectangle from "./Rectangle";

export default class Frame extends Component {
  clickIssuance = iId => {
    this.props.clickIssuance(iId);
  };
  render() {
    return (
      <div className="frame-container">
        <User user={this.props.user} />
        <div className="header">Deal Room</div>
        <Tabs />
        <Rectangle
          issuance={this.props.issuance}
          clickIssuance={this.clickIssuance}
        />
      </div>
    );
  }
}

Frame.propTypes = {
  clickIssuance: PropTypes.func.isRequired,
  user: PropTypes.array.isRequired,
  issuance: PropTypes.array.isRequired
};
