import React from 'react'

export default class HighData extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        HighData: {this.props.value}
      </div>
    )
  }
}