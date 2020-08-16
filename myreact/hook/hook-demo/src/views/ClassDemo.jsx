import React from 'react'

function Sub(props) {
  return (
    <div>
      我是一个子组件{props.value}
    </div>
  )
}

export default class ClassDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '斐斐'
    }
  }
  render() {
    return (
      <div>
        <Sub value="爱斐斐" />
        Hello: {this.state.name}
      </div>
    )
  }
}