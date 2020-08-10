import React from 'react'
import Button from 'antd/es/button'
import 'antd/es/button/style/css'
import Steps from 'antd/es/steps'
import 'antd/es/steps/style/css'
import Pagination from 'antd/es/pagination'
import 'antd/es/pagination/style/css'

// 图标
import {HeartTwoTone} from '@ant-design/icons'

import './Demo.css'

export default class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      current: 0
    }
  }

  onChangeSteps = current => {
    console.log(current)
    this.setState({
      current: current
    })
  }
  onChangePagination = (page, pageSize) => {
    console.log(page, pageSize)
  }
  showTotal = (total, range) => {
    // console.log(total, range)
    return `Total ${total} items`
  }
  render() {
    const {Step} = Steps
    const {current} = this.state
    return (
      <div className="container">
        <Button type="primary">按钮</Button>
        <HeartTwoTone twoToneColor="#eb2f96" />
        <div>
          <Steps current={current} size="small" onChange={this.onChangeSteps}>
            <Step title="开始" description="2019-08-26"/>
            <Step title="热恋" description="long time"/>
            <Step title="婚礼" description="oneDay in the future" />
          </Steps>
          </div>
          <Pagination 
            showTotal={this.showTotal}
            onChange={this.onChangePagination}
            showQuickJumper
            showTitle
            defaultCurrent={6} 
            total={500}/>
      </div>
    )
  }
}