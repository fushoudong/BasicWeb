// 这是一个非受控组件实现的方案，适合组件内容较多时
import React from 'react'

export default class FormDemo2 extends React.Component {
  constructor() {
    super()
    this.input1 = React.createRef()
    this.input2 = React.createRef()
    this.handleSumbit = this.handleSumbit.bind(this)
  }
  handleSumbit(e) {
    e.preventDefault()
    this.input1.current.value = '我爱斐斐'
    this.input2.current.value = '一生一世'
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSumbit}>
          <input name="text" type="text" ref={this.input1} />
          <input name="text" type="text" ref={this.input2} />
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }
}