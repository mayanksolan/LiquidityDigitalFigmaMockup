import React, { Component } from "react";
import "../../stylesheets/DealInfo.css";

export default class DealInfo extends Component {
  render() {
    return (
      <div className="dealInfo">
        <button className="close">
          Close<i className="fas fa-times closeIcon"></i>
        </button>
      </div>
    );
  }
}
