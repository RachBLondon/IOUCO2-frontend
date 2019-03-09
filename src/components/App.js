import React, { Component } from "react";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", originAirport : "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value1: event.target.value });
  }

  handleSubmit(event){
      console.log("this.at", this.state)
      event.preventDefault()
    this.setState({originAirport : this.state.value1})
  }

  render() {
    return (
      <div>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value1}
        />
        {this.state.originAirport && <h1>{this.state.originAirport }</h1>}
      </div>
    );
  }
}

export default App;
