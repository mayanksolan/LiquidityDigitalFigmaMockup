import React from "react";
import CurrencyFormat from "react-currency-format";
import PropTypes from "prop-types";

function Required(props) {
  const {
    dateOfCreation,
    countryOfIssuance,
    industryType,
    totalIssuedShares,
    freeFloat,
    pricePerShare
  } = props.issuance;

  //converting string to date format
  const dateOfCreation1 = new Date(dateOfCreation).toDateString().substring(4);

  return (
    <div className="req">
      <div className="req-head">Required</div>

      <div>
        <div className="req-grid1">
          <div className="req-first">Date of Creation</div>
          <div className="req-second">{dateOfCreation1}</div>
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
          <div className="req-second">
            <CurrencyFormat
              value={totalIssuedShares}
              displayType={"text"}
              thousandSeparator={true}
              renderText={value => <div>{value}</div>}
            />
          </div>
        </div>
        <div className="req-grid5">
          <div className="req-first">Free Float</div>
          <div className="req-second">
            <CurrencyFormat
              value={freeFloat}
              displayType={"text"}
              thousandSeparator={true}
              renderText={value => <div>{value}</div>}
            />
          </div>
        </div>
        <div className="req-grid6">
          <div className="req-first">Price per share</div>
          <div className="req-second">${pricePerShare}</div>
        </div>
      </div>
    </div>
  );
}

Required.propTypes = {
  issuance: PropTypes.object.isRequired
};

export default Required;
