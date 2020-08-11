import React from 'react'
import { Redirect, Prompt } from 'react-router-dom'
export default class Shop extends React.Component {
  constructor() {
    super() 
    this.state = {
      isLogin: true,
      data: ''
    }
  }
  changeData = (e) => {
    this.setState({
      data: e.target.value
    })
  }
  render() {
    return (
      <div>
        {
          this.state.isLogin? 
          <h1>登录成功</h1>:
          <Redirect to="/"/>
        }
        <Prompt when={!!this.state.data} message="确定切换页面？"/>
        <input value={this.state.data}  onChange={this.changeData}/>
      </div>
    )
  }
}