import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Father extends React.Component {
  constructor() {
    super();
    this.state = {
      celsius: 10,
      scale: 'f'
    };
  }
  handleCelsiusChange(e) {
    this.setState({
      celsius: e.target.value,
    });
    console.log("调用父组件", e);
  }
  handleFahrenheitChange(e) {
    this.setState({
      celsius: this.tryConvert(e.target.value, this.toCelsius),
    });
    console.log("调用父组件", e);
  }
  toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.celsius}
          onChange={this.handleCelsiusChange.bind(this)}
        />
        <TemperatureInput
          id="toCelsius"
          scale="c"
          celsius={this.state.celsius}
          handleCelsiusChange={this.handleCelsiusChange.bind(this)}
        />
        <TemperatureInput
          id="toFahrenheit"
          scale="f"
          celsius={this.tryConvert(this.state.celsius, this.toFahrenheit)}
          handleCelsiusChange={this.handleFahrenheitChange.bind(this)}
        />
        <BoilingVerdict celsius={this.state.celsius} />
      </div>
    );
  }
}
