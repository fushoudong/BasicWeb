import React from 'react'
import Child from './Child'
import Child1 from './Child1'

const MyAPI = {
  count: 0,
  subscribe(callback) {
    this.timer1 = setInterval(() => {
      this.count += 1
      callback(this.count)
    }, 1000)
  },
  unSubscribe() {
    clearInterval(this.timer1)
    this.reset()
  },
  reset() {
    this.count = 0
  }
}

export default class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      object: ''
    }
  }
  componentDidMount() {
    // 在组件挂载后调用
    MyAPI.subscribe((data) => {
      this.setState({
        count: data
      })
    })
  }
  componentWillUnmount() {
    MyAPI.unSubscribe()
  }
  render() {
    const {count} = this.state
    const {object} = this.state
    console.log('parent render => ', count)
    return (
      <div>
        Parent: 11 
        <div>
          <Child value={count}/>
          <Child1 value={count}/>
        </div>
      </div>
    )
  }
}