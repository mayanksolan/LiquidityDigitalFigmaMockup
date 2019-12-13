import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "../src/components/Menu";
import Frame from "../src/components/Frame";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        { userId: 1, userName: "Alan Lambert" },
        { userId: 2, userName: "Roger Federer" }
      ],
      issuance: [
        {
          issuanceId: 1,
          userId: 1,
          name: "Energy Infrastructure",
          industryType: "Financial Services",
          issuanceType: "Equity",
          targetRaise: 230000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "Europe",
          status: "In Progress",
          description:
            "As such, Energy Infrastructure naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "05242019",
          countryOfIssuance: "US",
          totalIssuedShares: 1000000000,
          freeFloat: 1000000,
          pricePerShare: 100,
          sourcingParty: {
            name: "John Murphy",
            email: "j.murphy@lead.com"
          },
          issuer: { name: "Denis Smith", email: "smithsde@gainx.com" },
          favorite: false
        },
        {
          issuanceId: 2,
          userId: 1,
          name: "ABC",
          industryType: "Financial Services",
          issuanceType: "Investment Fund",
          targetRaise: 230000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "U.S.",
          status: "In Progress",
          description:
            "As such, ABC naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "04192018",
          countryOfIssuance: "US",
          totalIssuedShares: 2000000000,
          freeFloat: 2000000,
          pricePerShare: 200,
          sourcingParty: {
            name: "John Doe",
            email: "johndoe@lead.com"
          },
          issuer: { name: "Mike Hussey", email: "mikehussey@gainx.com" },
          favorite: false
        },
        {
          issuanceId: 3,
          userId: 1,
          name: "Alternative Gas Extraction",
          industryType: "Space",
          issuanceType: "Debt",
          targetRaise: 230000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "U.S.",
          status: "Closed",
          description:
            "As such, Alternative Gas Extraction naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "03172017",
          countryOfIssuance: "US",
          totalIssuedShares: 3000000000,
          freeFloat: 3000000,
          pricePerShare: 300,
          sourcingParty: {
            name: "Steve Smith",
            email: "stevesmith@lead.com"
          },
          issuer: { name: "David Warner", email: "davidwarner@gainx.com" },
          favorite: false
        },
        {
          issuanceId: 4,
          userId: 2,
          name: "Energy Services",
          industryType: "Financial Services",
          issuanceType: "Equity",
          targetRaise: 230000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "Europe",
          status: "In Progress",
          description:
            "As such, Energy Infrastructure naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "05242019",
          countryOfIssuance: "US",
          totalIssuedShares: 1000000000,
          freeFloat: 1000000,
          pricePerShare: 100,
          sourcingParty: {
            name: "John Murphy",
            email: "j.murphy@lead.com"
          },
          issuer: { name: "Denis Smith", email: "smithsde@gainx.com" },
          favorite: false
        },
        {
          issuanceId: 5,
          userId: 2,
          name: "XYZ",
          industryType: "Financial Services",
          issuanceType: "Investment Fund",
          targetRaise: 230000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "U.S.",
          status: "Closed",
          description:
            "As such, ABC naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "04192018",
          countryOfIssuance: "US",
          totalIssuedShares: 2000000000,
          freeFloat: 2000000,
          pricePerShare: 200,
          sourcingParty: {
            name: "John Doe",
            email: "johndoe@lead.com"
          },
          issuer: { name: "Mike Hussey", email: "mikehussey@gainx.com" },
          favorite: false
        },
        {
          issuanceId: 6,
          userId: 2,
          name: "Natural Gas Chamber",
          industryType: "Space",
          issuanceType: "Debt",
          targetRaise: 230000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "U.S.",
          status: "In Progress",
          description:
            "As such, Alternative Gas Extraction naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "03172017",
          countryOfIssuance: "US",
          totalIssuedShares: 3000000000,
          freeFloat: 3000000,
          pricePerShare: 300,
          sourcingParty: {
            name: "Steve Smith",
            email: "stevesmith@lead.com"
          },
          issuer: { name: "David Warner", email: "davidwarner@gainx.com" },
          favorite: false
        }
      ]
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Frame issuance={this.state.issuance} user={this.state.user} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
