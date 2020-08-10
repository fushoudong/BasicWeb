import React from 'react'
export default class List extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        List
        <ul>
        {
          // 使用map进行遍历循环
          this.props.data.map((item, index) => {
            return <li key={index}>{item}</li>
          }) 
        }
        </ul>
      </div>
    )
  }
}