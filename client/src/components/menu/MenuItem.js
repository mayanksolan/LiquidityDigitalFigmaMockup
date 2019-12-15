import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover_flag: false
    };
  }

  hoverEvent = () => {
    this.setState({ hover_flag: !this.state.hover_flag });
  };

  render() {
    var liStyle = {
      background: "#ffffff",
      borderLeft: "5px solid white"
    };
    if (this.props.isSelected || this.state.hover_flag) {
      liStyle["background"] = "#FAFAFB";
      liStyle["borderLeft"] = "5px solid #aab8e6";
      liStyle["cursor"] = "pointer";
    }
    return (
      <div
        className="menu-item"
        onClick={this.props.onClick}
        onMouseEnter={this.hoverEvent}
        onMouseLeave={this.hoverEvent}
        style={liStyle}
      >
        {this.props.name}
      </div>
    );
  }
}

MenuItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool
};
