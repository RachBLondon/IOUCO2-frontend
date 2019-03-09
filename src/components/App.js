import React, { Component } from "react";
import Form from "./Form";
import axios from "axios";
import airports from "./../../utils/airport-codes";
import ReactAutocomplete from "react-autocomplete";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", originAirport: "", autocompleteValue: "" ,  autocompleteValue1: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.callApi = this. callApi.bind(this);
  }

  handleChange(event) {
    this.setState({ value1: event.target.value }, () => {
      var options = {
        shouldSort: true,
        threshold: 0.4,
        maxPatternLength: 32,
        keys: [
          {
            name: "iata",
            weight: 0.5
          },
          {
            name: "name",
            weight: 0.3
          },
          {
            name: "city",
            weight: 0.2
          }
        ]
      };

      var fuse = new Fuse(airports, options);
      const results = fuse.search(this.state.value1);
      console.log("results", results);
    });
  }

  handleChange2(event) {
    this.setState({ value2: event.target.value });
  }

  handleSubmit(event) {
    console.log("this.at", this.state);
    event.preventDefault();
    this.setState({
      originAirport: this.state.value1,
      destinationAirport: this.state.value2
    });
  }

  render() {
    return (
      <div>
        <ReactAutocomplete
          items={[
            { id: "foo", label: "foo" },
            { id: "bar", label: "bar" },
            { id: "baz", label: "baz" }
          ]}
          shouldItemRender={(item, autocompleteValue) =>
            item.label.toLowerCase().indexOf(autocompleteValue.toLowerCase()) > -1
          }
          getItemValue={item => item.label}
          renderItem={(item, highlighted) => (
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
            >
              {item.label}
            </div>
          )}
          value={this.state.autocompleteValue}
          onChange={e => this.setState({ autocompleteValue: e.target.value })}
          onSelect={autocompleteValue => this.setState({ autocompleteValue })}
        />

<ReactAutocomplete
          items={airports}
          shouldItemRender={(item, autocompleteValue1) =>
            item.city.toLowerCase().indexOf(autocompleteValue1.toLowerCase()) > -1
          }
          getItemValue={item => item.iata}
          renderItem={(item, highlighted) => (
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
            >
              {item.name}
              <h5>{item.iata}</h5>
            </div>
          )}
          value={this.state.autocompleteValue1}
          onChange={e => this.setState({ autocompleteValue1: e.target.value })}
          onSelect={autocompleteValue1 => this.setState({ autocompleteValue1 })}
        />

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleChange2={this.handleChange2}
          value={this.state.value1}
        />
        {this.state.originAirport && this.state.destinationAirport && (
          <div>
            <span>Origin Airport : {this.state.originAirport}</span>
            <span>Destination Airport : {this.state.destinationAirport}</span>
            {/* <button onClick={this.callApi}> Get CO2 Data</button> */}
          </div>
        )}
      </div>
    );
  }
}

export default App;
