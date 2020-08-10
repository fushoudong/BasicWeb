import React from 'react'
export default class IfDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      flag: true
    }
  }
  changeToggle = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    const showEle = this.state.flag? <h1>哈哈</h1>: <h1>请登录...</h1>
    return (
      <div>
        {showEle}
        {
          this.state.flag && showEle
        }
        <button onClick={ this.changeToggle }>toggle</button>
      </div>
    )
  }
}