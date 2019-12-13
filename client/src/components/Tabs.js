import React, { Component } from "react";

export default class Tabs extends Component {
  render() {
    return (
      <div className="tabs">
        <div>
          <span className="section1">
            <div className="section-name">External Issuances</div>
            <div className="coloured-line"></div>
          </span>
          <span className="section2">
            <div className="section-name">Favorite Issuances</div>
            <div className="coloured-line"></div>
          </span>
          <span className="section3">
            <div className="section-name">My Issuances</div>
            <div className="coloured-line"></div>
          </span>
          <span className="section4">
            <div className="section-name">MNDA Management</div>
            <div className="coloured-line"></div>
          </span>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}
