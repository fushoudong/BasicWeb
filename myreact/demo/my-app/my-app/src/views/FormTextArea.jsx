import React from 'react'

export default class FormTextArea extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '斐斐'
    }
  }
  handleInputChange(e) {
    console.log(e.target)
    this.setState({
      name: e.target.value
    })
  }
  handleFromSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log('提交的名字', this.state.name)
  }
  render() {
    return (
      <div>
        {this.state.name}
        <form onSubmit={this.handleFromSubmit}>
          <textarea type="text" name="text1" value={this.state.name} onChange={this.handleInputChange.bind(this)} />
          <input type='submit' value="提交" />
        </form>
      </div>
    )
  }
}