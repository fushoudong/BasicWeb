// http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php
import React from 'react'
export default class Chengpin extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    console.log(this.props, )
    return (
      <div>
        <h2>
          {
            this.props.data?
            this.props.data.chengpinInfo[0].title:
            'loading'
          }
        </h2>
      </div>
    )
  }
}