import React, { Component } from "react";
import airports from './../../utils/airport-codes';
import ReactAutocomplete from "react-autocomplete";

class AirportDropDown extends Component {
  render() {
    return (
        <div>
            <span>{this.props.label}</span>
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
              value={this.props.value}
              onChange={this.props.onChange}
              onSelect={this.props.onSelect}
            />
        </div>
    );
  }
}

export default AirportDropDown;
