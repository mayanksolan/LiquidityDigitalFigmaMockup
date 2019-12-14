import React, { Component } from "react";
import "../../stylesheets/DealInfo.css";
import Tabs from "./Tabs";
import Highlights from "./Highlights";
import Description from "./Description";

export default class DealInfo extends Component {
  render() {
    return (
      <div className="dealInfo">
        <button className="close">
          Close<i className="fas fa-times closeIcon"></i>
        </button>
        <Tabs />
        <Highlights issuance={this.props.issuance[0]} />
        <Description description={this.props.issuance[0].description} />
      </div>
    );
  }
}