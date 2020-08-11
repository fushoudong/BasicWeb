import React from 'react'

export default class Child extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  handleClick = () => {
    this.props.clickEvent('我爱斐斐')
  }
  render() {
    return (
      <div>
        
        <button className="btn btn-success m-2" onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}