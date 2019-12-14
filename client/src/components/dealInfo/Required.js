import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function Required(props) {
  const {
    dateOfCreation,
    countryOfIssuance,
    industryType,
    totalIssuedShares,
    freeFloat,
    pricePerShare
  } = props.issuance;
  return (
    <div className="req">
      <div className="req-head">Required</div>
      <PerfectScrollbar>
        <div>
          <div className="req-grid1">
            <div className="req-first">Date of Creation</div>
            <div className="req-second">{dateOfCreation}</div>
          </div>
          <div className="req-grid2">
            <div className="req-first">Country of Issuance</div>
            <div className="req-second">{countryOfIssuance}</div>
          </div>
          <div className="req-grid3">
            <div className="req-first">Industry</div>
            <div className="req-second">{industryType}</div>
          </div>
          <div className="req-grid4">
            <div className="req-first">Total Issued Shares</div>
            <div className="req-second">{totalIssuedShares}</div>
          </div>
          <div className="req-grid5">
            <div className="req-first">Free Float</div>
            <div className="req-second">{freeFloat}</div>
          </div>
          <div className="req-grid6">
            <div className="req-first">Price per share</div>
            <div className="req-second">{pricePerShare}</div>
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
}

export default Required;
