import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <tr className="table-header">
            <th>Name & Industry Type</th>
            <th>Issuance Type</th>
            <th>Target Raise</th>
            <th>Pre-Money Valuation</th>
            <th>Amount Raised</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </table>
      </div>
    );
  }
}
