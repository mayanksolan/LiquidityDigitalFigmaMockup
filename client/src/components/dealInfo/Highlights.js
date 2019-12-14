import React from "react";

function Highlights(props) {
  //   console.log(props);
  const {
    targetRaise,
    amountRaised,
    preMoneyValuation,
    status
  } = props.issuance;
  const targetRaise1 = targetRaise / 1000000;
  const preMoneyValuation1 = preMoneyValuation / 1000000;
  const amountRaised1 = amountRaised / 1000000;
  const statIcon =
    status === "In Progress" ? (
      <i className="fas fa-circle cirBlue"></i>
    ) : (
      <i className="fas fa-circle cirGreen"></i>
    );
  return (
    <div>
      <div className="high1">
        <div className="high-head">Target Raise</div>
        <div className="high-val">${targetRaise1}M</div>
      </div>
      <div className="high2">
        <div className="high-head">Amount Raised</div>
        <div className="high-val">${amountRaised1}M</div>
      </div>
      <div className="high3">
        <div className="high-head">Valuation</div>
        <div className="high-val">${preMoneyValuation1}M</div>
      </div>
      <div className="high4">
        <div className="high-head">Status</div>
        <div className="high-val">
          {statIcon}
          {status}
        </div>
      </div>
    </div>
  );
}

export default Highlights;
