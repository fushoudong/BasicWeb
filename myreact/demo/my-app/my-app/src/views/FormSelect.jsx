import React from 'react'

export default class FormSelect extends React.Component {
  constructor() {
    super()
    this.state = {
      fruit: ['苹果', '香蕉', '桃子', '西瓜'],
      value: '西瓜'
    }
  }
  hanleFruitChange(e) {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <select value={this.state.value} onChange={this.hanleFruitChange.bind(this)}>
          {
            this.state.fruit.map((item, index) => {
              return <option value={item} key={index} label={item}></option>
            })
          }
        </select>
      </div>
    )
  }
}