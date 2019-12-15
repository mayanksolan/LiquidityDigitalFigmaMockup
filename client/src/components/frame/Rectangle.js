import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "./Table";

export default class Rectangle extends Component {
  clickIssuance = iId => {
    this.props.clickIssuance(iId);
  };
  render() {
    return (
      <div className="rectangle">
        <div className="btn1">
          <i className="fas fa-plus btn1-icon"></i>
          <span className="btn1-text">Add Issuance</span>
        </div>
        <div className="btn2">
          <i className="fas fa-filter btn2-icon"></i>
          <span className="btn2-text">Filters</span>
        </div>
        <Table
          issuance={this.props.issuance}
          clickIssuance={this.clickIssuance}
        />
      </div>
    );
  }
}

Rectangle.propTypes = {
  clickIssuance: PropTypes.func.isRequired,
  issuance: PropTypes.array.isRequired
};
