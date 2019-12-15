import React from "react";
import Modal from "react-responsive-modal";
import "./App.css";
import Menu from "./components/menu/Menu";
import Frame from "./components/frame/Frame";
import DealInfo from "./components/dealInfo/DealInfo";

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
          targetRaise: 23000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "Europe",
          status: "In Progress",
          description:
            "As such, Energy Infrastructure naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "2019-05-24",
          countryOfIssuance: "US",
          totalIssuedShares: 100000000,
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
          targetRaise: 23000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "U.S.",
          status: "In Progress",
          description:
            "As such, ABC naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "2019-04-24",
          countryOfIssuance: "US",
          totalIssuedShares: 200000000,
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
          targetRaise: 23000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "U.S.",
          status: "Closed",
          description:
            "As such, Alternative Gas Extraction naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "2018-03-24",
          countryOfIssuance: "US",
          totalIssuedShares: 300000000,
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
          targetRaise: 23000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "Europe",
          status: "In Progress",
          description:
            "As such, Energy Infrastructure naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "2016-04-24",
          countryOfIssuance: "US",
          totalIssuedShares: 100000000,
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
          targetRaise: 23000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "U.S.",
          status: "Closed",
          description:
            "As such, ABC naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "2019-11-24",
          countryOfIssuance: "US",
          totalIssuedShares: 200000000,
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
          targetRaise: 23000000,
          preMoneyValuation: 1000000,
          amountRaised: 1000000,
          location: "U.S.",
          status: "In Progress",
          description:
            "As such, Alternative Gas Extraction naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
          dateOfCreation: "2019-08-24",
          countryOfIssuance: "US",
          totalIssuedShares: 300000000,
          freeFloat: 3000000,
          pricePerShare: 300,
          sourcingParty: {
            name: "Steve Smith",
            email: "stevesmith@lead.com"
          },
          issuer: { name: "David Warner", email: "davidwarner@gainx.com" },
          favorite: false
        }
      ],
      selectedIssuanceId: null,
      open: false
    };
  }

  clickIssuance = iId => {
    this.setState({
      selectedIssuanceId: iId,
      open: true
    });
  };
  closeClicked = () => {
    this.setState({ selectedIssuanceId: null, open: false });
  };
  render() {
    const { open } = this.state;
    const selectIssuance = this.state.issuance.filter(
      issua => issua.issuanceId === this.state.selectedIssuanceId
    );
    const finalIssuance =
      selectIssuance.length === 0 ? this.state.issuance[0] : selectIssuance[0];
    return (
      <div className="App">
        <div>
          <Menu />
          <Frame
            issuance={this.state.issuance}
            user={this.state.user}
            clickIssuance={this.clickIssuance}
          />
        </div>
        {this.state.selectedIssuanceId !== null && (
          <Modal open={open} onClose={this.closeClicked}>
            <DealInfo
              issuance={finalIssuance}
              closeClicked={this.closeClicked}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
