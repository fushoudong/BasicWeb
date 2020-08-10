import React from 'react'
export default class OperateCount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increase() {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrease= () => {
    this.setState({
      count: this.state.count - 1
    })
  } 
  render() {
    return (
      <div>
        <p><span>{this.state.count}</span></p>
        <button onClick={this.increase.bind(this)}>增加</button>
        <button onClick={this.decrease}>减少</button>
      </div>
    )
  }
}