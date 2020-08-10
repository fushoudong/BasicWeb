import React from 'react'

export default class FormCheckbox extends React.Component {
  constructor() {
    super()
    this.state = {
      isCheckbox: false,
      isNumber: 2
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(e) {
    const target = e.target
    const value = e.target.name === 'isCheckbox' ? target.checked: target.value
    const name = e.target.name
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <form>
          <label>
            checkbox
            <input type="checkbox" name="isCheckbox" checked={this.state.isCheckbox} onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            <input type="number" name="isNumber" value={this.state.isNumber} onChange={this.handleInputChange}/>
          </label>  
        </form>
      </div>
    )
  }
}