import React from 'react'
export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toTimeString()
    }
  }
  componentDidMount() {
    this.timerId = setInterval( () => {this.tick()}, 1000)
  }
  tick() {
    this.setState({
      date: new Date().toTimeString()
    })
  }
  render() {
    return (
      <div>
        <p>当前时间：{this.state.date}</p>
      </div>
    )
  }
}