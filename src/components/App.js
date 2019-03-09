import React, { Component } from "react";
import AirportDropDown from "./AirportDropDown";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originAirport: "",
      destinationAirport: "",
      originAirportCode: "",
      destinationAirportCode: ""
    };
  }

  handleChangeOrigin = e => {
    this.setState({ originAirport: e.target.value });
  };

  handleSelectOrigin = value => {
    this.setState({ originAirportCode: value });
  };

  handleChangeDestination = e => {
    this.setState({ destinationAirport: e.target.value });
  };

  handleSelectDestination = value => {
    this.setState({ destinationAirportCode: value });
  };

  render() {
    console.log("state", this.state);
    return (
      <div>
        <AirportDropDown
          label="Origin Airport"
          value={
            this.state.originAirportCode
              ? this.state.originAirportCode
              : this.state.originAirport
          }
          onChange={this.handleChangeOrigin}
          onSelect={this.handleSelectOrigin}
        />
        <AirportDropDown
          label="Destination Airport"
          value={
            this.state.destinationAirportCode
              ? this.state.destinationAirportCode
              : this.state.destinationAirport
          }
          onChange={this.handleChangeDestination}
          onSelect={this.handleSelectDestination}
        />
        <button
          onClick={() =>
            this.setState({
              originAirport: "",
              destinationAirport: "",
              originAirportCode: "",
              destinationAirportCode: ""
            })
          }
        >
          Reset
        </button>
        <button onClick={()=> alert("hello")}>Submit</button>
      </div>
    );
  }
}

export default App;
