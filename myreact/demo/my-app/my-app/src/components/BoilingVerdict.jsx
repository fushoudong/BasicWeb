import React from 'react'
export default class BoilingVerdict extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  showMsg(celsius) {
    if(celsius >= 100) {
      return <h3>The water would boil.</h3>
    }else {
      return <h3>The water would not boil.</h3>
    }
  }
  render() {
    return (
      <div>
        {this.showMsg(this.props.celsius)}
      </div>
    )
  }
}