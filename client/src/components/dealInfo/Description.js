import React from "react";
import PropTypes from "prop-types";

function Description(props) {
  return (
    <div className="di_desc">
      <div className="di_desc_head">Description</div>
      <div className="di_desc_text">{props.description}</div>
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.string.isRequired
};

export default Description;
