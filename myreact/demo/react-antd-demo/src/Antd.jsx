import React from 'react'
import {Button, Pagination, Steps} from 'antd'

export default class Antd extends React.Component {
  constructor() {
    super()
    this.state = {
      current: 0
    }
  }
  handleStepChange = (current) => {
    this.setState({
      current
    })
  }
  handlePaginationChange = (page, pageSize) => {
    console.log(page)
  }
  render() {
    const {Step} = Steps
    const {current} = this.state
    return (
      <div>
        <Button type="primary">测试按钮</Button>
        <Steps current={current} onChange={this.handleStepChange}>
          <Step title="开始"/>
          <Step title="热恋"/>
          <Step title="wedding"/>
        </Steps>
        <Pagination 
          showQuickJumper
          onChange={this.handlePaginationChange}
          current={1}
          total={500}
        ></Pagination>
      </div>
    )
  }
}