import React from 'react'
export default class SetState extends React.Component {
  constructor() {
    super()
    this.state = {
      data: '将故事写成我们',
      count: 0
    }
  }
  // changeData = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //     data: '爱斐斐' + (this.state.count)
  //   }, () => {
  //     // 回调函数输出异步结果
  //     console.log(this.state.data, '内部')
  //   })
  //   console.log(this.state.data)
  // }
  async changeData() {
    await this.changeDataAsync({
      count: this.state.count + 1,
      data: '爱斐斐' + (this.state.count)
    })
    console.log(this.state.data)
  }
  changeDataAsync(state) {
    // console.log('哈哈')
    return new Promise(resolve => {
      this.setState(state, resolve)
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.data}</p>
        <button onClick={this.changeData.bind(this)}>修改数据</button>
      </div>
    )
  }
}