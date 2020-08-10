import React from 'react'
export default class IfDemo2 extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogin: true,
      name: ["zhangsan", "lisi"]
    }
  }
  changeToggle = () => {
    this.setState({
      isLogin: !this.state.isLogin,
      name: !this.state.isLogin?["zhangsan", "lisi"] :[]
    })
  }
  render() {
    const{isLogin, name} = this.state
    const showView = isLogin? <h1>FeiFei</h1>: <div>请登录</div>
    return (
      <div>
        {showView}
        {
          name.length > 0 && name.map((item, index) => {
            return <p color="blue" key={index}>{item}</p>
          })
        }
        <button onClick={ this.changeToggle }>toggle</button>
      </div>
    )
  }
}