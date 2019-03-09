import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Origin Airport:
          <input
            type="text"
            value={this.props.value1}
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          Desintation Airport:
          <input
            type="text"
            value={this.props.value2}
            onChange={this.props.handleChange2}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
