import React, { Component } from "react";
import "../../stylesheets/DealInfo.css";
import Tabs from "./Tabs";
import Highlights from "./Highlights";
import Description from "./Description";
import Required from "./Required";
import Documents from "./Documents";
import SourcingPeople from "./SourcingPeople";
import EditIssuance from "./EditIssuance";

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
        <Required issuance={this.props.issuance[0]} />
        <Documents />
        <SourcingPeople issuance={this.props.issuance[0]} />
        <EditIssuance />
      </div>
    );
  }
}
