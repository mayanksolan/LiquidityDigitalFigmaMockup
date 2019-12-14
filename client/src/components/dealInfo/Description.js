import React from "react";

function Description(props) {
  console.log(props);
  return (
    <div className="di_desc">
      <div className="di_desc_head">Description</div>
      <div className="di_desc_text">{props.description}</div>
    </div>
  );
}

export default Description;
