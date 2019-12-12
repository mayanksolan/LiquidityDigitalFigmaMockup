import React, { Component } from "react";
import liquidity_logo from "../assets/liquidity_logo.png";
import "../stylesheets/Menu.css";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navArr: ["Deal Room", "Broker-Dealer Registry", "Issuance Statistics"]
    };
  }

  render() {
    const email = "support@digital.com";
    return (
      <div className="container">
        <img src={liquidity_logo} alt="liquidity logo" />
        <div>
          {this.state.navArr.map(item => (
            <div>{item}</div>
          ))}
        </div>
        <div>
          Contact us if you have any questions:{" "}
          <a href={email}>support@digital.com</a>
        </div>
      </div>
    );
  }
}
