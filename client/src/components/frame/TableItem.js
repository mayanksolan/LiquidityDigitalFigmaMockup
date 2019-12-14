import React, { Component } from "react";

export default class TableItem extends Component {
  render() {
    const {
      name,
      industryType,
      issuanceType,
      targetRaise,
      preMoneyValuation,
      amountRaised,
      location,
      status
    } = this.props.issueItem;
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
      <tr>
        <td className="table1Elem">
          <div>{name}</div>
          <div className="industryType">{industryType}</div>
        </td>
        <td>{issuanceType}</td>
        <td>${targetRaise1}M</td>
        <td>${preMoneyValuation1}M</td>
        <td>${amountRaised1}M</td>
        <td>{location}</td>
        <td>
          {statIcon}
          {status}
        </td>
      </tr>
    );
  }
}
