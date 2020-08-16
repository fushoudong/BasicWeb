import React from 'react'
import Child from '../components/Child'

export default class Mome extends React.Component {
  constructor() {
    super()
    this.state = {
      time: new Date().toLocaleString()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    console.log("render")
    return (
      <div>
        <h1>time {this.state.time}</h1>
        <Child data={""}/>
      </div>
    )
  }
}