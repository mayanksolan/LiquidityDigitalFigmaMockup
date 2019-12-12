import React, { Component } from "react";
import liquidity_logo from "../assets/liquidity_logo.png";
import "../stylesheets/Menu.css";
import MenuItem from "./MenuItem";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navArr: ["Deal Room", "Broker-Dealer Registry", "Issuance Statistics"],
      selectedItem: null
    };
  }

  clickHandler = idx => {
    this.setState({ selectedItem: idx });
  };

  render() {
    //let btn_class = this.state.black ? "blackButton" : "whiteButton";
    const email = "support@digital.com";

    return (
      <div className="container">
        <img src={liquidity_logo} alt="liquidity logo" />
        <div className="menu-list">
          {this.state.navArr.map((item, idx) => {
            var is_selected = this.state.selectedItem === idx;
            return (
              <MenuItem
                key={item.idx}
                name={item}
                onClick={() => this.clickHandler(idx)}
                isSelected={is_selected}
              />
            );
          })}
        </div>
        <div className="contact-us">
          Contact us if you have any questions:{" "}
          <a href={email}>support@digital.com</a>
        </div>
      </div>
    );
  }
}
