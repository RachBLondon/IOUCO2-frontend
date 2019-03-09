import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Origin Airport:
          <input
            type="text"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
