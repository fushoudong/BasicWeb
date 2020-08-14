// http://iwenwiki.com/api/blueberrypai/getIndexBanner.php
import React from 'react'
export default class Banner extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
      <h2>
      {
        this.props.data?
        this.props.data.banner[0].title:
        'loading'
      }
    </h2>
      </div>
    )
  }
}