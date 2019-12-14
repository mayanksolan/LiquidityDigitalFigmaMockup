import React from "react";

function SourcingPeople(props) {
  console.log(props.issuance.sourcingParty);
  return (
    <div>
      <div className="src-box1">
        <div className="src-box-head">Sourcing Party</div>
        <div className="src-box-name">{props.issuance.sourcingParty.name}</div>
        <div className="src-box-email">
          {props.issuance.sourcingParty.email}
        </div>
      </div>
      <div className="src-box2">
        <div className="src-box-head">Issuer</div>
        <div className="src-box-name">{props.issuance.issuer.name}</div>
        <div className="src-box-email">{props.issuance.issuer.email}</div>
      </div>
    </div>
  );
}

export default SourcingPeople;
