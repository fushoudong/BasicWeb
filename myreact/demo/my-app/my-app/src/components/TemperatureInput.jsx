import React from 'react'
export default class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
  }
  handleTemperatureChange(e) {
    console.log(e.target)
    this.props.handleCelsiusChange(e)
  }
  render() {
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit'
    };
    const temperature = this.props.celsius;
    const scale = this.props.scale;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}</legend>
          <input type="text" value={temperature} onChange={this.handleTemperatureChange.bind(this)}/>
        </fieldset>
      </div>
    )
  }
}