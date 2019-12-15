import React, { Component } from "react";
import PropTypes from "prop-types";
import TableItem from "./TableItem";

export default class Table extends Component {
  clickIssuance = iId => {
    this.props.clickIssuance(iId);
  };
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th className="table1Elem">Name & Industry Type</th>
              <th>
                Issuance Type<i className="fas fa-sort-down"></i>
              </th>
              <th>
                Target Raise<i className="fas fa-sort-down"></i>
              </th>
              <th>
                Pre-Money Valuation<i className="fas fa-sort-down"></i>
              </th>
              <th>
                Amount Raised<i className="fas fa-sort-down"></i>
              </th>
              <th>
                Location<i className="fas fa-sort-down"></i>
              </th>
              <th>
                Status<i className="fas fa-sort-down"></i>
              </th>
            </tr>
            {this.props.issuance.map(issueItem => (
              <TableItem
                key={issueItem.issuanceId}
                issueItem={issueItem}
                clickIssuance={this.clickIssuance}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  clickIssuance: PropTypes.func.isRequired,
  issuance: PropTypes.array.isRequired
};
