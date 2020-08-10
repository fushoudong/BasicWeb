import React from 'react'

export default class LifeCycle extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 10
    }
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
    
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  handleButtonClick() {
    this.setState({
      count: this.state.count * 10
    })
  }
  render() {
    return (
      <div>
        <h1>生命周期函数</h1>
        <h2>{this.props.name}</h2>
        <p>数值为：{this.state.count}</p>
        <button onClick={this.handleButtonClick.bind(this)}>calc</button>
      </div>
    )
  }
}