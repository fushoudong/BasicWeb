import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      data: ''
    }
  }
  handleClick = (data) => {
    this.setState({
      data
    })
  }
  render() {
    const {data} = this.state
    return (
      <div>
        Parent：{data}
        <Child clickEvent={this.handleClick}/>
      </div>
    )
  }
}